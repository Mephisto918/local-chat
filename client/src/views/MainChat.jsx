import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import MessageContainer from '../components/MessageContainer'
import SendMessage from '../components/SendMessage'
import ConvoNav from '../components/ConvoNav'
import { io } from 'socket.io-client'

const MainChat = () => {
  // const api = 'http://localhost:8000';
  const [socket, setSocket] = useState(null);
  const [api, setApi] = useState(null);
  
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const latestMessage = useRef(null);
  
  useEffect(()=>{
    const api = localStorage.getItem('api');
    console.log(api);
    
    setApi(api);
    const newSocket = io(api);
    setSocket(newSocket);

    return ()=> newSocket.disconnect();
  }, [api]);

  useEffect(() => {

    if(socket){
      socket.on('convoArray', (array) => {
        setMessages(array);
      });
    }
    
    console.log('run');
    // return () => socket.off('convoArray'); //yawa wako kasabot
  }, [socket]);
  
  useEffect(() => {
    // Scroll to the latest message whenever messages update
    setTimeout(() => {
      latestMessage.current?.scrollIntoView({ behavior: 'smooth' });
   }, 50);
  }, [messages]); // Runs whenever `messages` changes


  function handleSendMessage(message) {
    setMessage(message);
    socket.emit('user_message', message);
  }

  return (
    <Messenger> 
      <ConvoNav></ConvoNav>
      <div >
        {messages && messages.map(message =>{
          return (
            <MessageContainer key={message.time} 
              message={message.message} 
              user={message.name} 
              data-time={message.time}
              data-id={message.time}
            />
          )
        })}
        <div ref={latestMessage}></div>
      </div>
      <SendMessage onSend={handleSendMessage}></SendMessage>
    </Messenger>  
  )
}

const Messenger = styled.section`
  position: relative;
  background-color: green;
  width: 30rem; 
  height: 100dvh;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  >div{
    overflow-y: scroll;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    flex-grow: 1;
  }
  

  @media only screen and (max-width: 768px) {
    background-color: blue;
    width: 100%;

  }
`;

export default MainChat