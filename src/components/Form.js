import React from 'react';

const Form = ()=>{
    return(
        <form>
            <input
              type="text"
              name="body"
              placeholder="Type a message ..."
              autoFocus
              required
              />
              <button type="submit">Send</button>
        </form>
    )
};

export default Form;