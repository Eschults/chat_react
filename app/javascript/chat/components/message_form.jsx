import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form action="/messages" method="post">
          <textarea className="form-control" rows="1"/>
        </form>
      </div>
    );
  }
}

export default MessageForm;
