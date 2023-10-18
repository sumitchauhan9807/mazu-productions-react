import {Routes , Route } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from 'views/Admin/Dashboard'

import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Loader from 'components/UI/Loader'


import Header from 'views/Admin/Components/Header'
import Footer from 'views/Admin/Components/Footer'
import AllModels from 'views/Admin/AllModels'
import ModelVideos from 'views/Admin/ModelVideos'
import AllTeams from 'views/Admin/AllTeams'
import TeamAdmins from 'views/Admin/TeamAdmins'

import TeamManagers from 'views/Admin/TeamManagers'
import Recuiters from 'views/Admin/Recuiters'
import ActorMeta from 'views/Admin/ActorMeta'
import StripChat from 'views/Admin/StripChat'
import StripchatStats from 'views/Admin/StripchatStats'
import ModelDemoMedia from 'views/Admin/ModelDemoMedia'




function AdminDashboard() {
  // console.log("ModelDashboard RENDER")
  // const dispatch = useDispatch()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })

  if(!user) return <Loader/>
  if(!user.token) {
    setTimeout(()=>{
      window.location.href = '/ad-login'
    },1000)
    return <Loader/>
  }
  if(user.userData.accountType != 'admin') {
    window.location.href = '/ad-login'
    return <Loader/>
  }

  return (
    <React.Fragment>
      <ThemeProvider>
      <Header/>
      <Routes>
        <Route exact path ="/admin" element= {<Dashboard/>}/> 
        <Route exact path ="/admin/models" element= {<AllModels/>}/> 
        <Route exact path ="/admin/teams" element= {<AllTeams/>}/> 
        <Route exact path ="/admin/teamadmins" element= {<TeamAdmins/>}/> 

        <Route exact path ="/admin/team/managers/:id" element= {<TeamManagers/>}/> 
        <Route exact path ="/admin/team/recuiters/:id" element= {<Recuiters/>}/> 

        <Route exact path ="/admin/model/videos/:id" element= {<ModelVideos/>}/> 
        <Route exact path ="/admin/model/meta/:id" element= {<ActorMeta/>}/> 
        <Route exact path ="/admin/model/stripchat/:id" element= {<StripChat/>}/> 
        <Route exact path ="/admin/model/stripchatstats/:id" element= {<StripchatStats/>}/> 

        <Route exact path ="/admin/model/modeldemomedia/:id" element= {<ModelDemoMedia/>}/> 



      </Routes>
      <Footer/>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default AdminDashboard