import {Routes , Route } from "react-router-dom";
import React from 'react';
import Dashboard from 'views/Model/Dashboard'
import Views from 'views/Model/Views'
import 'assets/dashboard/css/style.css'
import 'assets/dashboard/css/satoshi.css'


function ModelDashboard() {
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