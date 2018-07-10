import React from 'react';
import Message from './Message';



const MessageList = ()=>{
    const messages =[
        {id: 1, userName: 'Jude', body:"Chatting App"},
        {id: 2, userName: 'Eric', body: "Yo Jude"}
    ]
    return(
        <div>
           {
               messages.map(message => <Message message = {message} key={message.id}/>)
           }
        </div>
        )
};

export default MessageList;