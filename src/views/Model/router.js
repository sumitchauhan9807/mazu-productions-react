import {Routes , Route } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import Dashboard from 'views/Model/Dashboard'
import Views from 'views/Model/Views'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Loader from 'components/UI/Loader'

function ModelDashboard() {
  console.log("ModelDashboard RENDER")
  const dispatch = useDispatch()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })

  if(!user) return <Loader/>
  if(!user.token) {
    window.location.href = '/login'
    return <Loader/>
  }
  if(!user.userData.profileComplete) {
    window.location.href = '/register'
    return <Loader/>
  }

  return (
    <React.Fragment>
      <Routes>
        <Route exact path ="/dashboard" element= {<Dashboard user={user}/>}/> 
        <Route exact path ="/dashboard/views" element= {<Views/>}/> 
      </Routes>
    </React.Fragment>
  )
}

export default ModelDashboard