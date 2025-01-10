import React from 'react'
import styled from 'styled-components'
const DecisionModal = () => {
  return (
    <Con>
      <div>
        <h1>Ttryasd</h1>
      </div>
    </Con>
  )
}

const Con = styled.div`
  background-color: #000000aa;

  position: absolute;
  height: 100dvh;
  width: 100dvw;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >div{
    border: 1px solid white;
  }
`

export default DecisionModal
