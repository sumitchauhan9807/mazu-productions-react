import Model from './Model/router'
import Website from './website/router'
import { useHistory ,useLocation } from 'react-router-dom';
import React, { useEffect ,useRef,useState} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {getNavigateURL} from 'helpers/index'
import { PersistGate } from 'redux-persist/integration/react'


function IndexWeb() {
  console.log('render')
  const navigate = useNavigate()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })

  
  if(user){
    console.log(user)
  }
  // console.log(PersistGate)
  
  const location = useLocation()
  let currentPath = location.pathname
  if(!user) return <h1 style={{color:'red'}}>Loading</h1>
  
  return (
    <React.Fragment>
      {!currentPath.includes('dashboard') && <Website/>}
      {currentPath.includes('dashboard') && <Model/>}
    </React.Fragment>
  )
}

export default  IndexWeb