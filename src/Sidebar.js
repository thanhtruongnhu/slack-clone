import React, { useState, useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment'; 
import SidebarOption from './SidebarOption'
import { Apps, BookmarkBorder, Drafts, ExpandLess, FileCopy, Inbox, PeopleAlt, ExpandMore, Add } from '@material-ui/icons';
import db from "./firebase"

function Sidebar() {
const [channels, setChannels] = useState([]);

    // Get the data from Firestore database (Run this code ONCE when the sidebar component loading (That's why we use empty bracket [] as dependecy))
    // onSnapshot: setup an active listener to react to any changes to the query (Specifically, attaches a listener for QuerySnapshot events)
    // snapshot: is QuerySnapshot (A QuerySnapshot contains zero or more QueryDocumentSnapshot objects representing the results of a query)
    // docs: An array of all the documents in the QuerySnapshot
    // The map() function is used to iterate over an array and manipulate or change data items. The map() function expects a callback as the argument and executes it once for each element in the array.  NOTE: 'doc' is an element in the array 'docs'
useEffect(() => { db.collection('room').onSnapshot(snapshot => (        
        setChannels(snapshot.docs.map(doc => ({
            id: doc.id, 
            name: doc.data().name,
        }))
    )))
}, [])

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
             <hr />
             <SidebarOption Icon={Add} title="Channels" />

             {/*Render all channels (based on database acquired from Firestore) */}
             {/* <SidebarOption /> */}
             {channels.map(channel => (
                 <SidebarOption title={channel.name} id={channel.id}/>
             ))}

        </div>
    )
}

export default Sidebar
