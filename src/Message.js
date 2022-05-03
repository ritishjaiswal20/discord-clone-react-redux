import React from 'react'
import './Message.css'
import { Avatar, IconButton } from '@mui/material'
function Message() {
  return (
    <div className="message">
        <Avatar/>
        <div className="message_info">
           <h4>
               Ritish jaiswal <span className="message_TimeStamp">this is a timestamp</span>
           </h4>
           <p>This is a message</p>
        </div>
    </div>
  )
}

export default Message