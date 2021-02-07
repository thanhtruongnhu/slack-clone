import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { useParams } from "react-router-dom"
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import db from "./firebase"
import Message from './Message'
import ChatInput from './ChatInput'

function Chat() {
    // useParams hook helps us to access the URL parameters from a current route.
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setroomMessages] = useState([]) //We must initiate it as an array as it will contain multiple elements inside it (different from roomDetails, it contains an object)

    useEffect(() => {

        // Pulling room details
        if (roomId) {
            db.collection("room")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        // Pulling message details
        db.collection('room').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => setroomMessages(snapshot.docs.map(doc => doc.data())))


    }, [roomId]);

    console.log(roomDetails)
    console.log(roomMessages)

    // console.log(roomMessages.map(({ message, timestamp, user, userImage }) => { }))

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong> {/*The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), */}
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message message={message} timestamp={timestamp} user={user} userImage={userImage}
                    />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
