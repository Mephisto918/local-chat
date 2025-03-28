import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const DecisionModal = ({
                        message1,
                        primeIcon,
                        message2,
                        message3,
                        messageTrue,
                        onTrue,
                        messageFalse,
                        onFalse,
                        optionalBg
                      }) => {
  return ReactDOM.createPortal(
    <Con style={{backgroundColor: optionalBg}}>
      <div>
        <div>
          <h4>{message1} <i className={String(primeIcon)}></i></h4>
        </div>

        <div>
          <h3>{message2}</h3>
          <h4>{message3}</h4>
        </div>

        <div>
          <button onClick={onTrue}>{messageTrue}</button>
          <button onClick={onFalse}>{messageFalse}</button>
        </div>
      </div>
    </Con>,
    document.getElementById('modal-parts') || docyment.body
  )
}

const Con = styled.div`
  background-color: #000000aa;
  --borad: 10px;

  /* position: absolute; */
  height: 100dvh;
  width: 100dvw;
  z-index: 100;
  /* top: 0; */
  /* left: 0; */
  /* transform: translate(-50%, -50%); */
  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  >div{
    border-radius: var(--borad);
    background-color: var(--theme-bg-dark-hard);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    >div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 1rem;

      &:first-child{
        height: 10%;
        background-color: var(--theme-bg-dark-soft);
      }

      &:nth-child(2){
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 20rem;
      }

      &:last-child{
        background-color: var(--theme-bg-dark-soft);
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 1rem 0rem;

        >button{
          background-color: var(--theme-bg-neutral);
          padding: 0.6rem 1.5rem;
          border-radius: calc(var(--borad) * 0.7);
          
          &:hover{
            background-color: var(--theme-bg-light-soft);
            cursor: pointer;

            color: var(--theme-fc-dark);
          }
        }
      }
    }
  }
`

export default DecisionModal
