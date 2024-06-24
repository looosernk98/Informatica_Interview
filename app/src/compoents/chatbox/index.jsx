import React from 'react'
import { useState } from 'react';
import Message from '../message'
import Input from '../input/index'
import './index.css'

const SENDER = 'sender'; // opponent
const RECEIVER = 'receiver' // me

const Chatbox = ({
    conversations,
    setConversation
}) => {
    // console.log('conversations: ', conversations);

    const [inputMsg, setInputMsg] = useState();
    const [toggleUser, setToggleuser] = useState(1);

    const handleOnSendMessage = () => {
      const newMsg = {
        user_id: toggleUser, // it's me
        msg: inputMsg,
        timestamp: ''
      }

      setConversation([...conversations, newMsg])
      setToggleuser(toggleUser == 1 ? 2 : 1)
      setInputMsg('');
    }
    return(
        <div className='chat-container'>
        <h1>user 1</h1>
        {
            conversations?.map((message, index) => 
                <Message 
                  msg={message}
                  type={message.user_id === 1 ? RECEIVER : SENDER}
                />
            )
        }
        <Input inputValue={inputMsg} setInputValue={(e) => setInputMsg(e?.target?.value)}/>
        <button type='button' onClick={handleOnSendMessage}>Send</button>
        </div>
    )
}

export default Chatbox