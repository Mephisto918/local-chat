import React, {useContext} from 'react'
import styled from 'styled-components'
import {Data} from '../App';

const MessageContainer = ({message, user}) => {
  // const name = 'gbol';
  const name = useContext(Data);

  return (
    <MessageCon style={{marginLeft: name === user ? 'auto' : '0', flexDirection: name === user ? 'row-reverse' : 'row' }}>
      <div>
        <p>{user ? user.charAt(0) : ''}</p>
      </div>
      <div>
        <p style={{textAlign: name === user ? 'right' : 'left'}}>{user}</p>
        <p>{message}</p>
      </div>
    </MessageCon>
  )
}

const MessageCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  >*:first-child{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    >p{
      border: 1px solid yellow;
      border-radius: 50%;
      width: 2rem;
      aspect-ratio: 1/1;
      font-size: 15pt;
      font-weight: 500;
      text-align: center;
    }
  }
  >*:last-child{
    width: 70%;

    display: flex;
    flex-direction: column;
    gap: .2rem;
    >p:first-child{
      font-size: 8pt;
    }
    >p:last-child{
      font-size: 10pt;
      border: 1px solid black;
      padding: 0.2rem 0.4rem;
      border-radius: 10px;
      background-color: brown;
      height: auto;
      overflow: scroll;
      overflow-wrap: break-word;
      word-break: break-all; 
      white-space: normal; 
    }
  }
`;

export default MessageContainer