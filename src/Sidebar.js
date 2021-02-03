import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment'; 
import SidebarOption from './SidebarOption'

function Sidebar() {
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
            <SidebarOption title="Youtube" />
        </div>
    )
}

export default Sidebar
