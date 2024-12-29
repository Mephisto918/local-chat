import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import MessageContainer from '../components/MessageContainer'
import SendMessage from '../components/SendMessage'
import Hooks from '../utils/Hooks'
import axios from 'axios'

const MainChat = () => {
  const { Get, Post } = Hooks().useAxios();
  const api = 'http://localhost:3000/message';

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { postData } = Post();

  useEffect(()=>{
    async function iffe(){
      const response = await axios.get(api);
      setMessages(response.data);
      console.log(response.data);
    }
    iffe();
  },[]);

  useEffect(()=>{
    async function iffe(){
      const response = await axios.get(api);
      setMessages(response.data);
      console.log(response.data);
    }
    iffe();
  },[message]);


  function handleSendMessage(message) {
    setMessage(message);
    postData(api, message);
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