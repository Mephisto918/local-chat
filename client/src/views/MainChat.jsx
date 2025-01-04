import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import MessageContainer from '../components/MessageContainer'
import SendMessage from '../components/SendMessage'
import { io } from 'socket.io-client'


const MainChat = () => {
  const api = '192.168.254.144:8000';
  // const api = 'http://localhost:8000';
  const socket = io(api);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const latestMessage = useRef(null);

  useEffect(() => {
    socket.on('convoArray', (array) => {
      setMessages(array);
    });
    
    console.log('run');
    return () => socket.off('convoArray');
  }, []);

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
// so I am tryng json server first, so i have sucessfully retrieve my dummy data, but now I am contemplating, do I put

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