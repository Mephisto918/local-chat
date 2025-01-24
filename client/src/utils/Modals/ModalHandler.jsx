import React from 'react'
import ReactDOM from 'react-dom'
import DecisionModal from './DecisionModal'

export function showModal(
                            message1,
                            primeIcon,
                            message2,
                            message3,
                            messageTrue,
                            messageFalse,
                          ){
 return new Promise ((r)=>{

    function unmount(){
      ReactDOM.unmountComponentAtNode(document.getElementById('modal-parts'));
    } 
  
    function handleTrue(){
      unmount();
      r(true);
    }
    function handleFalse(){
      unmount();
      r(false);
    }

    ReactDOM.render(
      <DecisionModal
        message1={message1}
        primeIcon={primeIcon}
        message2 = {message2}
        message3 = {message3}
        messageTrue = {messageTrue}
        onTrue = {handleTrue}
        messageFalse = {messageFalse}
        onFalse = {handleFalse}
      >
      </DecisionModal>,
      document.getElementById('modal-parts')
    )
 })
}