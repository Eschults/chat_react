import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <img className="avatar" src={this.props.message.user.avatar_url} />
        <div className="content">{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
