import {useContext} from 'react'
import styled from 'styled-components'
import {Data} from '../App';

const MessageContainer = ({message, user}) => {
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
      background-color: var(--theme-bg-neutral);
      color: var(--theme-fc-light);
      border-radius: 50%;
      width: 2rem;
      aspect-ratio: 1/1;
      font-size: 15pt;
      font-weight: 500;
      text-align: center;
    }
  }
  >*:last-child{
    max-width: 70%;
    min-width: 0%;
    
    display: flex;
    flex-direction: column;
    gap: .2rem;
    >p:first-child{
      color: var(--theme-fc-light);
      font-size: 8pt;
    }
    >p:last-child{
      /* border: 1px solid yellow; */
      background-color: var(--theme-bg-dark-soft);

      color: var(--theme-fc-light);
      font-size: 10pt;
      padding: 0.6rem 0.6rem;
      border-radius: 15px;
      height: auto;
      overflow: hidden;
      /* overflow: scroll; */
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word; 
      white-space: normal; 
    }
  }
`;

export default MessageContainer