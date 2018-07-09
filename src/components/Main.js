import React from 'react';
import { SectionWrapper } from './UI';
import Sidebar from './Sidebar';
import Chat from './Chat';

const Main = ()=>{
    return(
        <SectionWrapper>
              <Sidebar/>
              <Chat/>
        </SectionWrapper>
        )
};

export default Main;