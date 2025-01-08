import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ConvoNav = () => {
  const [username, setUsername] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('username') != null) return setUsername(localStorage.getItem('username'));
  },[]);

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
  background-color: red;
  height: 8dvh;
  width: 100%;

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
    background-color: blue;
    height: 2rem;
    aspect-ratio: 1/1;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: 1px solid white;

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
`;

export default ConvoNav
