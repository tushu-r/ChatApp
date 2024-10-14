// src/components/ChatDisplay.js
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const ChatDisplay = ({dispatch}) => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ height: '400px', overflowY: 'auto' , border: '1px solid #ccc'}}>
      <List style={{width:'50%'}}>
        {messages.map((msg, index) => (
          <ListItem key={index} alignItems="flex-start" style={ msg.user == 'Bot' ? {position:'relative',left:'100%',width:'fit'} : {position:'relative',left:'0%',width:'fit'}}  >
            <ListItemText
              primary={
                <Typography variant="body2">
                  <strong>{msg.user}</strong> [{msg.timestamp}]
                </Typography>
              }
              secondary={msg.text}
            />
          </ListItem>
        ))}
      </List>
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatDisplay;
