import React from 'react'
import ReactDOM from 'react-dom/client'
import DecisionModal from './DecisionModal'

export function showModal(
                            message1,
                            primeIcon,
                            message2,
                            message3,
                            messageTrue,
                            messageFalse,
                          ){
 return new Promise ( r => {
    const root = ReactDOM.createRoot(document.getElementById('modal-parts'));
    // const { unmount, render } = ReactDOM.createRoot(document.getElementById('modal-parts'));
  
    function handleTrue(){
      root.unmount();
      r(true);
    }
    function handleFalse(){
      root.unmount();
      r(false);
    }

    root.render(
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
    )
 })
}