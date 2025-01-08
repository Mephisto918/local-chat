import styled from 'styled-components'
import InputeUsernameModal from './components/InputeUsernameModal';
import MainChat from './views/MainChat';
import { createContext, useEffect, useState } from 'react';

export const Data = createContext();
function App() {
  const [username, setUsername] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('username') != null) return setUsername(localStorage.getItem('username'));
  },[]);

  function sendUsername(username) {
    setUsername(username);
  }

  useEffect(()=>{

  },[]);
  return (
    <>
      <Data.Provider value={username}>
        <Container>
          <InputeUsernameModal sendUsername={sendUsername}></InputeUsernameModal>
          <MainChat ></MainChat>
        </Container>
      </Data.Provider>
    </>
  )
}

const Container = styled.div`
  /* background-color: #0000ffbb; */
  position: relative;

  width: 100dvw;
  height: 100dvh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default App
