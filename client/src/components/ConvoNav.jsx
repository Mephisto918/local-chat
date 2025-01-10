import React, { useEffect, useState, useContext  } from 'react'
import styled from 'styled-components'
import { Data } from '../App';

const ConvoNav = () => {
  const passUsername = useContext(Data);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('username') != null) return setUsername(localStorage.getItem('username'));
  },[]);

  useEffect(()=>{
    setUsername(passUsername);
  },[passUsername]);

  function handleSignOut(){
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Nav>
      <div>
        <h4>{username}</h4>
      </div>
      <button onClick={handleSignOut}>
        <i className='pi pi-sign-out'>
        </i>
      </button>
      <button>
        <i className='pi pi-user-edit'>
        </i>
      </button>
    </Nav>  
  )
}

const Nav = styled.nav`
  background-color: var(--theme-bg-dark-soft);
  height: 8dvh;
  width: 100%;

  --border-rad: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 2rem;

  >div{
    margin-right: auto;
  }

  >button{
    background-color: var(--theme-bg-light-soft);
    color: color-mix(in srgb, var(--theme-fc-light) 50%, white 50%);

    height: 2rem;
    aspect-ratio: 1/1;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: var(--border-rad);
    
    &:hover{
      cursor: pointer;
      &:active{
        background-color: color-mix(in srgb, var(--theme-bg-light-soft) 50%, white 50%);
        color: color-mix(in srgb, var(--theme-fc-light) 50%, black 50%);
        transform: scale(0.9);
      }
    }
    >i{
      font-size: 12pt;
    }
  }
`;

export default ConvoNav
