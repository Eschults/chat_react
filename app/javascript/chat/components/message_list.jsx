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
    axios.get(`/messages.json`)
          .then(res => {
            debugger
            const messages = res.data.messages;
            this.setState({ messages });
          });
  }

  renderMessages() {
    return this.state.messages.map((message) => {
      return <Message message={message} />;
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
