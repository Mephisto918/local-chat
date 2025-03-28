import React from 'react';
import MessageCon from '../components/MessageContainer';

export default {
  title: 'Messages/MessageCon',
  component: MessageCon,
  argTypes: {
    message: { control: 'text', description: 'message'},
    user: { control: 'text', description: 'sender'}
  }
}

export const Default = {
  args: {
    message: 'test message',
    user: 'test user'
  }
}