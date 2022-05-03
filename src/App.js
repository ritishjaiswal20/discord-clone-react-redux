import React from 'react';
import Sidebar from "./Sidebar.js"
import { Counter } from './features/Counter';
import './App.css';
import Chat from './Chat.js';

function App() {
  return (
    <div className="app">
       <Sidebar/>
       <Chat/>
    </div>
  );
}

export default App;
