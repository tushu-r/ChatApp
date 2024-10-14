// src/components/ChatApp.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './features/chat/chatslice';
import ChatDisplay from './ChatDisplay';
import MessageInput from './MessageInput';
import { Container } from '@mui/material';

const ChatApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     setTimeout(() => {
      dispatch(receiveMessage({
        user: 'Bot',
        text: 'Hello! This is a simulated message.',
        timestamp: new Date().toLocaleTimeString(),
      }));
    }, 3000);
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <ChatDisplay />
      <MessageInput dispatch={dispatch}/>
    </Container>
  );
};

export default ChatApp;
