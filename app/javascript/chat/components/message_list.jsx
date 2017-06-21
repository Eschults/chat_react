import React, { Component } from 'react';
import Message from './message';
import axios from 'axios';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.fetchMessages();
    App.cable.subscriptions.create('MessagesChannel', {
      received: (data) => {
        this.fetchMessages(),
      }
    });
  }

  fetchMessages() {
    axios.get('/messages.json')
      .then(response => {
        const messages = response.data.messages;
        this.setState({ messages });
      });
  }

  renderMessages() {
    return this.state.messages.map((message) => {
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
