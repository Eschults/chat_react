import React, { Component } from 'react';
import Message from './message';

class MessageList extends Component {
  renderMessages() {
    return this.props.messages.map((message) => {
      return <Message key={message.id} message={message} />;
    })
  }

  render() {
    return (
      <div className="messages">
        {this.renderMessages()}
      </div>
    );
  }
}

export default MessageList;
