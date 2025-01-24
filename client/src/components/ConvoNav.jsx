import React, { useEffect, useState, useContext  } from 'react'
import styled from 'styled-components'
import { Data } from '../App';

import { showModal } from '../utils/Modals/ModalHandler';

const ConvoNav = () => {
  const passUsername = useContext(Data);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('username') != null) return setUsername(localStorage.getItem('username'));
  },[]);

  useEffect(()=>{
    setUsername(passUsername);
  },[passUsername]);

  async function handleSignOut(){
    const answer = await showModal(
                                    "Alert",
                                    "pi pi-exclamation-circle",
                                    "Are you sure you want to sign out?",
                                    null,
                                    "Yes",
                                    "No"
                                  )

    if(answer){
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <Nav>
      <div>
        <h4>{username}</h4>
      </div>
      <button>
        <i className="pi pi-users"></i>
        <p>0</p>
      </button>
      <button onClick={handleSignOut}>
        <i className='pi pi-sign-out'></i>
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

    &:nth-child(2){
      margin-right: auto;
      display: flex;
      width: auto;
      height: auto;
      aspect-ratio: unset;
      padding: 0.3rem 0.5rem;
      gap: 1rem;
    }
    
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
