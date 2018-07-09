import React, { Component } from 'react';
import { Provider } from './components/Context';
import Main from './components/Main';


class App extends Component{
    render(){
        return(
            <main>
               <Provider>
                    <Main/>
               </Provider>
            </main>
        )
    }
};

export default App;