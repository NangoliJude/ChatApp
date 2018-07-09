import React, { Component } from 'react';
import { Context } from './Context';

class Provider extends Component{
    state = {
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