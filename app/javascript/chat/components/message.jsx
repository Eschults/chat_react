import React, { Component } from 'react';

class Message extends Component {
  render() {
    var classes = 'message';
    if (this.props.message.user.id == parseInt(this.props.currentUserId)) {
      classes += ' mine';
    }
    return (
      <div className={classes}>
        <img className="avatar" src={this.props.message.user.avatar_url} />
        <div className="content">{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
