import {Routes , Route } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from 'views/Admin/Dashboard'

import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Loader from 'components/UI/Loader'


import Header from 'views/Admin/Components/Header'
import Footer from 'views/Admin/Components/Footer'
import AllModels from 'views/Admin/Components/AllModels'
import ModelVideos from 'views/Admin/Components/ModelVideos'




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
    window.location.href = '/ad-login'
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
        <Route exact path ="/admin/model/videos/:id" element= {<ModelVideos/>}/> 
      </Routes>
      <Footer/>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default AdminDashboard