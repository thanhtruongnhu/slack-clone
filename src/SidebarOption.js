import React from 'react'
import { useHistory } from 'react-router-dom'
import './SidebarOption.css'
import db from "./firebase"

function SidebarOption({ Icon, title, id, addChannelOption}) {
    const history = useHistory() //Whenever you click Back or Forward button on your web browser, this Hook store all path that you have performed (track record) => use to redirect in terms of time
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        }
        else {
            history.push(title)
        }
    }
    
    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if (channelName) {
            db.collection('room').add({
                name: channelName
            })
        }
    }

    return (
        <div 
            className="sidebarOption"
            // If we click on a line/channel and it has addChannelOption prop. It will fire up the addChannel function. Otherwise, it will fire up selectChannel - only select that channel)
            onClick = {addChannelOption ? addChannel : selectChannel}
        >

            {/*ICON*/}
            {Icon && <Icon className="sidebarOption__icon"/>} {/*Only render an icon when Icon is passed in (available)*/ }


            {/*TEXT*/}
            {Icon ? (<h3>{title}</h3>): (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )
            } {/*If you don't pass an icon, it will start a channel (start with #) */}
        </div>
    )
}

export default SidebarOption
