import {Routes , Route } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import Dashboard from 'views/Model/Dashboard'
import Views from 'views/Model/Views'
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

function ModelDashboard() {
  const navigate = useNavigate()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })

  
  if(user){
    console.log(user)
    if(!user.token) {
      window.location.href = '/login'
      // navigate('/login')
    }
  }
  
 
  if(!user?.token) return null
  return (
    <React.Fragment>
      <Routes>
        <Route exact path ="/dashboard" element= {<Dashboard/>}/> 
        <Route exact path ="/dashboard/views" element= {<Views/>}/> 
      </Routes>
    </React.Fragment>
  )
}

export default ModelDashboard