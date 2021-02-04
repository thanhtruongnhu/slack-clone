import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment'; 
import SidebarOption from './SidebarOption'
import { Apps, BookmarkBorder, Drafts, ExpandLess, FileCopy, Inbox, PeopleAlt, ExpandMore, Add } from '@material-ui/icons';

function Sidebar() {
const [channels, setChannels] = useState([]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> Main Board</h2>
                    <h3> 
                        <FiberManualRecordIcon />
                        Kyle Nhu
                        
                    </h3>
                </div>
                <CreateIcon />
                
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" /> {/*Use capital "I" in Icon becuz, we passing a component as a prop*/ }
            <SidebarOption Icon={Inbox} title="Mentions & reactions" /> 
            <SidebarOption Icon={Drafts} title="Saved items" /> 
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" /> 
            <SidebarOption Icon={PeopleAlt} title="People & user group" /> 
            <SidebarOption Icon={Apps} title="Apps" /> 
            <SidebarOption Icon={FileCopy} title="File browser" /> 
            <SidebarOption Icon={ExpandLess} title="Show less" /> 
             <hr /> {/*Horizontal row */}
             <SidebarOption Icon={ExpandMore} title="Channels" />
             <SidebarOption Icon={Add} title="Channels" />

             {/*Connect to dataBase (dB) and list all channels */}
             {/* <SidebarOption /> */}

        </div>
    )
}

export default Sidebar
