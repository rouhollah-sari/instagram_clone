import React from 'react';
import {Route,Routes} from 'react-router-dom';

import FirstPage  from './components/FirstPage/FirstPage.js';
import Header from './components/MainPage/Header.js'
import Wrapper from './components/MainPage/Wrapper.js'
import SignUp1 from '../src/components/FirstPage/SignUp1.js'
import SignUp2 from '../src/components/FirstPage/SignUp2.js'
import NoPage from '../src/components/FirstPage/NoPage.js'
import Page from '../src/components/MainPage/Page.js'



export default function App() {
  

 
  return (
    
    <div>
      <div>
       

        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Register" element={<SignUp1/>} />
          <Route path="/AddPhoto" element={<SignUp2/>} />
          <Route path="/Home" element={<Page/>} />
          <Route path="/NoPage" element={<NoPage/>}/>
        </Routes>
      </div>
    </div>
  );
}



