import React, { Component } from 'react';
import { Context } from './Context';

class Provider extends Component{
    state = {
       messages:[
            {id: 1, userName: 'Jude', body:"Chatting App"},
            {id: 2, userName: 'Eric', body: "Yo Jude I too enjoy chatting"}
        ],
        name: "Jude Nangoli",
        chat: ""
    }
    render(){
        return(
            <Context.Provider value={{
                state: this.state,
                actions: {
                    onChange: this.onChange
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
};

export { Provider };