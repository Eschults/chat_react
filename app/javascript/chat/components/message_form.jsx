import React, { Component } from 'react';
import axios from 'axios';

class MessageForm extends Component {
  submitForm(e) {
    e.preventDefault();
    axios.post('/messages', { content: this.input.value });
    this.input.value = null;
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitForm.bind(this)}>
          <input className="form-control" ref={(input) => { this.input = input; }}/>
        </form>
      </div>
    );
  }
}

export default MessageForm;
