import React, { Component } from 'react';

class Message extends Component {
  render() {
    var classNames = 'message';
    if (this.props.currentUserId == this.props.message.user.id) {
      classNames += ' mine';
    }

    return (
      <div className={classNames} >
        <img className="avatar" src={this.props.message.user.avatar_url} />
        <div className="content">{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
