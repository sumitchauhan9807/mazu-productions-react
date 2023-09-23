import Model from './Model/router'
// import Website from './website/router'
import Admin from './Admin/router'
import { useHistory ,useLocation } from 'react-router-dom';
import React, { useEffect ,useRef,useState,lazy,Suspense} from 'react'
import 'index.css'


function IndexWeb() {
  
const location = useLocation()
  let currentPath = location.pathname
  let isDashboard = currentPath.includes('dashboard')
  let isAdmin =  currentPath.includes('admin')
  let isWebsite = !isDashboard && !isAdmin
  
  let Website = () => <h1>asdasd</h1>
  if(isWebsite) {
    Website = lazy(() => import("./website/router"));
  }

  return (
    <React.Fragment>
      {isAdmin && <Admin/>}
      {isWebsite && <Suspense><Website/></Suspense>}
      {isDashboard && <Model/>}
    </React.Fragment>
  )
}

export default  IndexWeb