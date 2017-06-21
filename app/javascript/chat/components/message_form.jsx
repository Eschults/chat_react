import React, { Component } from 'react';

class MessageForm extends Component {
  submitForm() {

  }

  render() {
    return (
      <div className="form-container">
        <form action="/messages" method="post" onSubmit={this.submitForm()}>
          <textarea className="form-control" rows="1"/>
        </form>
      </div>
    );
  }
}

export default MessageForm;
