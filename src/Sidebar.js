import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css'
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
function Sidebar() {
  const user=useSelector(selectUser);
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <h3>Clever progammer</h3>
            <ExpandMoreIcon/>
        </div>

        <div className="sidebar_channels">
            <div className="sidebar_channelsHeader">
                <div className="sidebar_header">
                   <ExpandMoreIcon/>
                   <h4> Text channels</h4>
                </div>
                <AddIcon className="s"/>
            </div>
            <div className="sidebar_channellist">
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
        </div>
        </div>
      <div className="sidebar_voice">
       <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>
       <div className="sidebar_voiceInfo">
         <h3>Voice stream</h3>
         <p>Stream</p>
       </div>
       <div className="sidebar_voiceIcons">
         <InfoOutlinedIcon/>
         <CallIcon/>
       </div>
      </div>

      <div className="sidebar_profile" onClick={()=>auth.signOut()} >
         <Avatar src={user.photo}/>
          <div className="sidebar_profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0,5)}</p>
          </div>
          <div className="sidebar_profileIcons">
            <MicIcon/>
            <HeadsetIcon/>
            <SettingsIcon/>
          </div>
      </div>
    </div>
  )
}

export default Sidebar