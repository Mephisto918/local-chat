import styled from 'styled-components'
import InputeUsernameModal from './components/InputeUsernameModal';
import MainChat from './views/MainChat';
import DecisionModal from './utils/Modals/DecisionModal';
import { io } from 'socket.io-client';
import { createContext, useEffect, useState } from 'react';

export const Data = createContext();
function App() {
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState(null);
  const [api, setApi] = useState(null);

  useEffect(()=>{
    const api = process.env.MACHINE_API_URL;
    localStorage.setItem('api', api);
    if(localStorage.getItem('username') != null) return setUsername(localStorage.getItem('username'));
  },[]);

  useEffect(()=>{
    const api = localStorage.getItem('api');
    
    setApi(api);
    const newSocket = io(api);
    setSocket(newSocket);

    return ()=> newSocket.disconnect();
  }, [api]);

  useEffect(()=>{
    if(socket){
      socket.emit('user_connect', username);
    }
  },[username]);

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
