import React, { Component } from 'react';
import { Provider } from './components/Context';
import { MainWrapper } from './components/UI'
import Main from './components/Main';



class App extends Component{
    render(){
        return(
            <Provider>
               <MainWrapper>
                    <Main/>
               </MainWrapper>
            </Provider>
            )
    }
};

export default App;