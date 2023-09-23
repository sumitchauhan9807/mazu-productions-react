import {Routes , Route } from "react-router-dom";
import React ,{useRef,useEffect}from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'views/website/Main'
import Actor from 'views/website/Actor'
import Register from 'views/website/Register'
import Login from 'views/website/Login'
import Test from 'views/website/Test'
import ModelLogin from 'views/Model/Modellogin'


function Website() {
  return (
    <React.Fragment>
      <Header/>
        <Routes>
          <Route exact path ="/" element= {<Main/>}/> 
          <Route exact path ="/actor/:id" element= {<Actor />}/> 
          <Route exact path ="/test" element= {<Test />}/> 
          <Route exact path ="/register" element= {<Register />}/> 
          <Route exact path ="/login" element= {<Login/>}/>
          <Route exact path ="/model-login" element= {<ModelLogin/>}/>
        </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default Website