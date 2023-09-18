import {Routes , Route } from "react-router-dom";
import React from 'react';
import 'index.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'views/website/Main'
import Actor from 'views/website/Actor'
import Register from 'views/website/Register'
import Login from 'views/website/Login'
import ModelDashboard from 'views/Model/Dashboard' 
import Test from 'views/website/Test'

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
        </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default Website