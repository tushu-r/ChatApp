// src/components/MessageInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from './features/chat/chatslice';
import { receiveMessage } from './features/chat/chatslice';

import { TextField, Button } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('') ;
  const dispatch = useDispatch() ;

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage({
        user: 'Tushar',
        text: message ,
        timestamp: new Date().toLocaleTimeString() ,
      })) ;
      setMessage('') ;
      setTimeout(() => {
        dispatch(receiveMessage({
          user: 'Bot',
          text: 'Hello! This is a simulated message.',
          timestamp: new Date().toLocaleTimeString(),
        }));
      }, 3000);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <TextField
        label="Type your message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
