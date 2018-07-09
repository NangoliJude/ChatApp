import React from 'react';



const Message = ()=>{
    const mesages =[
        {id: 1, userName: 'Jude', body:"Chatting App"},
        {id: 2, userName: 'Eric', body: "Yo Jude"}
    ]
    return(
        <div>
           {mesages.map((message)=>{
               return(
                   <p key={message.id}>{message.userName}-{message.body}</p>
               )
           })}
        </div>
        )
};

export default Message;