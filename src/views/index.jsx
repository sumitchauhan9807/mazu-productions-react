import Model from './Model/router'
import Website from './website/router'
import Admin from './Admin/router'
import { useHistory ,useLocation } from 'react-router-dom';
import React, { useEffect ,useRef,useState} from 'react'
import 'index.css'


function IndexWeb() {
  
const location = useLocation()
  let currentPath = location.pathname
  let isDashboard = currentPath.includes('dashboard')
  let isAdmin =  currentPath.includes('admin')
  let isWebsite = !isDashboard && !isAdmin
  if(isWebsite) {
    require('website.css')
  }
  return (
    <React.Fragment>
      {isAdmin && <Admin/>}
      {isWebsite && <Website/>}
      {isDashboard && <Model/>}
    </React.Fragment>
  )
}

export default  IndexWeb