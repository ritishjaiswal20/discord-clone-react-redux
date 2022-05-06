import React from 'react'
import  {auth, provider } from './firebase'
import Button from '@mui/material/Button';
import './Login.css'
function Login() {
  const signIn=()=>{
   auth.signInWithPopup(provider).catch((error)=>alert(error.message));
  }
  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://www.freepnglogos.com/uploads/discord-logo-png/playerunknown-battlegrounds-bgparty-15.png"/>
      </div>
      <Button onClick={signIn}>SignIn</Button>
    </div>
  )
}
export default Login
