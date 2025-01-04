import { useContext } from 'react'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react';
import {Data} from '../App';
const SendMessage = ({onSend}) => {
  const passUsername = useContext(Data);
  // const [username, setUsername] = useState('<empty>')
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${Math.max(100, message.length * 10)}px`;
    }
  }, [message]);

  function messageChange(e){
    setMessage(e.target.value);
  }

  function handleMessage(e){
    e.preventDefault(); // Prevent line break
    sendMessage("");
    inputRef.current.style.height = `2.2rem`; // Set height based on scrollHeight
  }

  function sendMessage(){
    if (!message.trim()) return;
    // setUsername(passUsername);
    onSend({
      id: Date.now(),
      name:  passUsername,
      message: message,
      time: new Date().toLocaleTimeString(),
      sender: "user",
    });
    console.log(passUsername);
    setMessage("");
  }
  const handleResize = (e) => {
    const number = e.target.scrollHeight;
    if(number >= 263) return;
    inputRef.current.style.height = `${number}px`;
  };
  return (
    <Footer>
        <textarea
          ref={inputRef}
          value={message}
          onKeyDown={messageChange}
          onChange={messageChange}
          onInput={handleResize}
          placeholder="Type a message..."
          rows="2"
        />
        <button type='submit' onClick={handleMessage} > <i className='pi pi-send'></i> </button>
    </Footer>
  )
}

const Footer = styled.footer`
    position: relative;
    bottom: 0.5rem;
    left: 0;
    background-color: red;
    
    height: auto;
    width: 100%;
    
    display: flex;
    justify-content: start;
    gap: 1rem;
    padding: 0.8rem 0.6rem;
    margin-top: auto;

    >*:first-child{
      background-color: green;
      transition: width 0.2s ease;
      flex-grow: 1;
      padding: 0.5rem;
      text-overflow: clip;
      white-space: wrap;
      height: 2.2rem;
      font-size: 12pt;
      border-radius: 15px;
      resize: none;
      text-decoration: none;
      outline: none;
    }

    >*:last-child{
      margin-left: auto;
      background-color: orange;
      border-radius: 10px;

      height: 2.2rem;
      aspect-ratio: 4/3;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover{
        cursor: pointer;
        &:active{
          transform: scale(0.9);
        }
      }
      >i{
        font-size: 12pt;
      }
    }
  
  @media only screen and (max-width: 768px) {
  background-color: red;
  
  }
  
`

export default SendMessage
