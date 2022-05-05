import React from 'react';
import Sidebar from "./Sidebar.js"
import {selectUser} from "./features/userSlice";
import './App.css';
import Chat from './Chat.js';
import {useSelector} from "react-redux";
function App() {
  const user=useSelector(selectUser);
  return (
    <div className="app">
      {user?(
        <> 
        <Sidebar/>
        <Chat/>
        </>
       
      ):(
        <h2>you are not logged in</h2>
      )}
      
    </div>
  );
}

export default App;
