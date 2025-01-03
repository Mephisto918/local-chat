import { useState } from 'react'
import styled from 'styled-components'
const InputeUsernameModal = ({sendUsername}) => {
  const [username, setUsername] = useState('');
  const [hasVal, setVal] = useState(false);

  function handleClick(e){
    e.preventDefault();
    setVal(true);
    sendUsername(username);
  }

  return (
    <Modal style={{display: hasVal ? 'none' : 'flex'}}>
      <div>
        <form>
          <label htmlFor="Name">Enter Your Name:</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={10}/>
          <button type="submit" onClick={handleClick}>Submit</button>
        </form>
      </div>
    </Modal>
  )
}

const Modal = styled.section`
  /* display: none; */

  background-color: #00800021;
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 50;

  height: 100dvh;
  width: 100dvw;
  top: 0;
  left: 0;

  >div{
    --bg-color: #196519;
    background-color: var(--bg-color);
    border: 1px solid color-mix(in srgb, var(--bg-color) 70%, white 70%);
    border-radius: 10px;
    height: auto;
    padding: 1rem;
    aspect-ratio: 1/1;  

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: start;
    align-items: center;

    >form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      >label{
        margin-top: 4rem; 
        font-size: 15pt;
        font-weight: 900;
      }
      >input{
        padding: 0.3rem 0.6rem;
        --input-bg: color-mix(in srgb, var(--bg-color) 90%, white 30%);
        background-color: color-mix(in srgb, var(--input-bg) 90%, white 30%);
        border: 1px solid color-mix(in srgb, var(--input-bg) 70%, white 70%);
        border-radius: 6px;
        color: color-mix(in srgb, var(--input-bg) 80%, black 90%);
      }
      >button{
        --bt-bg: color-mix(in srgb, var(--bg-color) 80%, white 50%);
        margin-top: auto;
        --base-bg: color-mix(in srgb, var(--bt-bg) 80%, black 20%);
        --base-border: color-mix(in srgb, var(--bt-bg) 80%, white 70%);
        background-color: var(--base-bg);
        border: 2px solid var(--base-border);
        border-radius: 10px;
        padding: .3rem .6rem;
        
        &:hover{
          background-color: color-mix(in srgb, var(--base-bg) 80%, white 20%);
          border: 1px solid color-mix(in srgb, var(--base-border) 80%, black 20%);
          &:active{
            background-color: color-mix(in srgb, var(--base-bg) 80%, black 20%);
            border: 1px solid color-mix(in srgb, var(--base-border) 80%, white 20%);
          }
          
        }
      }
    }
  }
`;

export default InputeUsernameModal
