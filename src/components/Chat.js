import React from 'react';
import ChatHeader from './UI/ChatHeader';
import MessageList from './MessageList';
import Form from './Form';


const Chat = ()=>{
    return(
        <div>
            <ChatHeader/>
            <MessageList/>
            <Form/>
        </div>
        )
};

export default Chat;