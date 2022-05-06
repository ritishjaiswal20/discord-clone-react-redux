import React, { useEffect } from 'react';
import Sidebar from "./Sidebar.js"
import {login, logout, selectUser} from "./features/userSlice";
import './App.css';
import Chat from './Chat.js';
import {useDispatch, useSelector} from "react-redux";
import Login from './Login.js';
import { auth } from './firebase.js';
function App() {
  const dispatch =useDispatch();
  const user=useSelector(selectUser);
  useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(
            login({ 
            uid: authUser.uid,
            photo: authUser.photo,
            email: authUser.email,
            displayName:authUser.displayName,
          })
          );
        }else{
           dispatch(logout());  
        }
      })
  },[dispatch])
  return (
    <div className="app">
      {user?(
        <> 
        <Sidebar/>
        <Chat/>
        </>
       
      ):(
         <Login/>
      )}
      
    </div>
  );
}

export default App;
