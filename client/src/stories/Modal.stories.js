import React from 'react'
import Modal from '../utils/Modals/DecisionModal'


export default {
  title: 'Modals/DecisionModal',
  component: Modal,
  argTypes: {
    message1: { control: 'text', description: 'message1' },
    primeIcon: {control: 'text', description: 'pi pi-exclamation-triangle' },
    message2: { control: 'text', description: 'message2' },
    message3: { control: 'text', description: 'message2' },
    messageTrue: { control: 'text', description: 'true' },
    onTrue: { action: 'onTrueClick' },
    messageFalse: { control: 'text', description: 'false' },
    onFalse: { action: 'onFalseClick' },
    optionalBg: { control: 'color', description: 'optionalBg' },
  }
}

export const Default = {
  args: {
    message1: 'test1',
    primeIcon: 'pi pi-exclamation-triangle',
    message2: 'test2',
    message3: 'test3',
    messageTrue: 'test4True',
    onTrue: () => console.log('TestTrue'),
    messageFalse: 'test5False',
    onFalse: () => console.log('TestFalse'),
  }
}

export const Alert = {
  ...Default.args,
  message1: 'Alert',
  optionalBg: 'orange',
}

export const Error = {
  ...Default.args,
  message1: 'Error',
  optionalBg: 'blue',

}