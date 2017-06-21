import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat';

var chat = document.querySelector('#chat');

if (chat) {
  ReactDOM.render(<Chat />, chat);
}
