// src/App.js
import React from 'react';
import ChatApp from './ChatApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ChatApp />
    </Provider>
  );
}

export default App;
