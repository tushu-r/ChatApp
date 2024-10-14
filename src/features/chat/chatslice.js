// src/features/chat/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],   // Array to hold messages
  currentUser: 'Tushar',  // Current user
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
