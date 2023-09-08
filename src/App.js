import React from 'react';
import {Routes , Route } from "react-router-dom"; 
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './views/Main'
import Actor from './views/Actor'
import {getUserAddress} from './helpers'
function App() {
  //  getUserAddress()
  return (
    <React.Fragment>
      <Header/>
        <Routes> 
          <Route exact path ="/" element= {<Main/>}/> 
          <Route exact path ="/actor/:id" element= {<Actor />}/> 
       </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
