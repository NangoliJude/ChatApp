import React from 'react';
import { Context } from './Context/Context';


const MessageList = ()=>{
    return(
        <Context.Consumer>
          {(context)=>{
              const { messages } = context.state;
              return(
              <React.Fragment>
               {messages.map(message=> <p key={message.id}>{message.userName} - {message.body}</p>)}
              </React.Fragment>
              )
          }}
        </Context.Consumer>
    )
};

export default MessageList;