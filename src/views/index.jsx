import Model from './Model/router'
import Website from './website/router'
import { useHistory ,useLocation } from 'react-router-dom';
import React, { useEffect ,useRef,useState} from 'react'



function IndexWeb() {
  
const location = useLocation()
  let currentPath = location.pathname
  return (
    <React.Fragment>
      {!currentPath.includes('dashboard') && <Website/>}
      {currentPath.includes('dashboard') && <Model/>}
    </React.Fragment>
  )
}

export default  IndexWeb