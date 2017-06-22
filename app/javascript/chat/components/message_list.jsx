import React, { Component } from 'react';
import axios from 'axios';
import Message from './message';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }


  fetchMessages = () => {
    axios.get('/messages.json')
      .then(response => {
        const messages = response.data.messages;
        this.setState({ messages });
      });
  }

  componentDidMount() {
    this.fetchMessages();
    App.cable.subscriptions.create('MessageChannel', {
      received: this.fetchMessages
    });
  }

  renderMessages = () => {
    return this.state.messages.map((message) => {
      return <Message currentUserId={this.props.currentUserId} key={message.id} message={message} />;
    })
  }

  render() {
    return (
      <div className="messages">{this.renderMessages()}</div>
    );
  }
}

export default MessageList;
