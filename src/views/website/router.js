import {Routes , Route } from "react-router-dom";
import React ,{useRef,useEffect}from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'views/website/Main'
import Actor from 'views/website/Actor'
import Register from 'views/website/Register'
import Login from 'views/website/Login'
import UserLogin from 'views/website/UserLogin'

import Test from 'views/website/Test'
import ModelLogin from 'views/Model/Modellogin'
import AdminLogin from 'views/website/AdminLogin'
import UserRegister from 'views/website/Userregister'
import ModelVideo from 'views/website/ModelVideo'
import FanClub from 'views/website/Fanclub'
import Success from 'views/website/Success'
import Error from 'views/website/Error'
import Modelstep from "views/website/Modelstep";
import Modelpricing from 'views/website/Modelfeature'
import MazuStudio from 'views/website/MazuStudios'

import 'website.css'

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
          <Route exact path ="/ad-login" element= {<AdminLogin/>}/>
          <Route exact path ="/registernow" element= {<UserRegister/>}/>
          <Route exact path ="/userlogin" element= {<UserLogin/>}/>
          <Route exact path ="/fanclub" element= {<FanClub/>}/>
          <Route exact path ="/success" element= {<Success/>}/>
          <Route exact path ="/404" element= {<Error/>}/>
          <Route exact path ="/howtobecomeamodel" element= {<Modelstep/>}/>
          <Route exact path ="/modelpackage" element= {<Modelpricing/>}/>
          <Route exact path ="/mazustudio" element= {<MazuStudio/>}/>

          <Route exact path ="/video/:id" element= {<ModelVideo/>}/>

        </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default Website