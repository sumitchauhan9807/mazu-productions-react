import {Routes , Route } from "react-router-dom";
import React from 'react';
import Golive from 'views/Live/GoLive'

function Live() {
    return (
      <React.Fragment>
        <Header/>
          <Routes>
            {/* <Route exact path ="/" element= {<Main/>}/>  */}
            {/* <Route exact path ="/actor/:id" element= {<Actor />}/> 
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
            <Route exact path ="/mazustudio" element= {<MazuStudio/>}/> */}
            <Route exact path = "/live1" element={<Golive/>}/>
  
     
  
          </Routes>
        <Footer/>
      </React.Fragment>
    )
  }
   
  export default Live