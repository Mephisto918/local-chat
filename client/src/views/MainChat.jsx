import { useState, useEffect } from 'react'
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

  useEffect(()=>{ // init
    async function iffe(){
      socket.on('connect', ()=>{
        console.log(socket.id);
      });
    }
    iffe();
  },[]);

  useEffect(()=>{
    // async function iffe(){
      
    // }
    // iffe();
    socket.on('convoArray',(array)=>{
      setMessages(array);
      console.log(array);
    });
  },[message]);


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

  >div{
    overflow-y: scroll;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    height: 100dvh;
  }
  

  @media only screen and (max-width: 768px) {
    background-color: blue;
    width: 100%;

  }
`;

export default MainChat