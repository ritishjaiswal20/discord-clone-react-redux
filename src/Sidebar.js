import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
function SidebarSidebar() {
  return (
    <div className="sidebar">
        <h2>I am the sidebar</h2>
        
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
      </div>
    </div>
  )
}

export default SidebarSidebar