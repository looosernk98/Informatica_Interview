import { useState } from 'react';
import './App.css';
import Chatbox from './compoents/chatbox/index'


const DATA = {
  sender:{
     user_id: 1,
     name:'user1'
  },
  receiver:{
     user_id:2,
     name:'user2'
  },
  conversation:[
    {
       timestamp: '',
       user_id:2,
       msg: "msg from user id 1",
    },
     {
       timestamp: '',
       user_id:1,
       msg: "msg from user 2",
    }
  ]
}

function App() {
  const[conversationData, setConversationData] = useState(DATA?.conversation)
  return (
    <div className="App">
       <Chatbox conversations={conversationData} setConversation={setConversationData}/>
    </div>
  );
}

export default App;
