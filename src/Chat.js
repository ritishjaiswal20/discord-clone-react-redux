import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Message from './Message';
function Chat() {
  return (
    <div className="chat">
        <ChatHeader/>
        <div className="chat_message">
            <Message/>
        </div>
        <div className="chat_input">
            <AddCircleIcon fontSize="large"/>
            <form>
                <input type="text" placeholder="Type a message"/>
                <button className="chat_inputbutton" type="submit">Send</button>
            </form>
            <div className="chat_inputIcons">
                <CardGiftcardIcon fontSize="large"/>
                <GifIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
            </div>
        </div>
    </div>
  )
}

export default Chat