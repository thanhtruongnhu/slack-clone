import { Avatar } from '@material-ui/core';
import React from 'react'
import  "./Message.css";

function Message({ message, timestamp, user, userImage }) {
    console.log(userImage)

    return (
        <div className="message">
            {/* <img src={userImage} alt=""/> */}
            <Avatar 
                className="message__avatar"
                    alt={user?.displayName}
                    src={userImage}
                />
            <div className="message__info">
                <h4>{user} <span className='message__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
 