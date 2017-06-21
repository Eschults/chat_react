import React, { Component } from 'react';
import MessageList from './message_list';

class Chat extends Component {
  render() {
    var messages = [{
      id: 1,
      user: { id: 1, first_name: "Boris" },
      content: 'Hello'
    },
    {
      id: 2,
      user: { id: 2, first_name: "Seb" },
      content: 'Hello'
    },
    {
      id: 3,
      user: { id: 3, first_name: "Romain" },
      content: 'Hello'
    }];

    return (
      <div>
        <MessageList messages={messages} />
      </div>
    );
  }
}

export default Chat;
