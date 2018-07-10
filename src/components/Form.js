import React from 'react';

const Form = ()=>{
    return(
        <form>
            <input
              type="text"
              name="body"
              placeholder="Type a message ..."
              autoFocusrequired
              />
              <button type="submit">Send</button>
        </form>
    )
};

export default Form;