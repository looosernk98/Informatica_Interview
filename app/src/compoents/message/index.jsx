import React from 'react';
import './index.css'

const SENDER = 'sender'; // opponent
const RECEIVER = 'receiver' // me

const Message = ({
    msg,
    type,
}) => {

    return(
        <>
          <div className={`message ${type === RECEIVER ? 'me': 'opp'}`}>{msg?.msg}</div>
        </>
    )
}

export default Message;