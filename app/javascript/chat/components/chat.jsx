import React, { Component } from 'react';
import MessageList from './message_list';
import MessageForm from './message_form';

class Chat extends Component {
  render() {
    return (
      <div>
        <MessageList />
        <MessageForm />
      </div>
    );
  }
}

export default Chat;
