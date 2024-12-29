import { useEffect, useState, createContext } from 'react'
import styled from 'styled-components'
import InputeUsernameModal from './components/InputeUsernameModal';
import MainChat from './views/MainChat';

export const Data = createContext();
function App() {
  const [username, setUsername] = useState('');
  function sendUsername(username) {
    setUsername(username);
  }

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
