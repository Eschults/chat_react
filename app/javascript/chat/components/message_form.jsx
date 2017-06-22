import React, { Component } from 'react';
import axios from 'axios';

class MessageForm extends Component {
  createMessage(e) {
    e.preventDefault();
    axios.post('/messages', { content: this.refs.input.value });
    this.refs.input.value = '';
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.createMessage.bind(this)}>
          <input className="form-control" ref="input" />
        </form>
      </div>
    );
  }
}

export default MessageForm;
