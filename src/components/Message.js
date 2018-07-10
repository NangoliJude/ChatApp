import React from 'react';
const Message = ({message})=>{
    return(
         <div>
             {message.userName}: {message.body}
         </div>
    )
};

export default Message;