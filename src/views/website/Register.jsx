import React from 'react';

import RegisterStepOne from 'components/Register/RegisterStepOne'
import RegisterStepTwo from 'components/Register/RegisterStepTwo'
import RegisterStepThree from 'components/Register/RegisterStepThree'
import {useSelector} from 'react-redux'
import RegisterStepFour from 'components/Register/RegisterStepFour'
import RegisterStepOtp from 'components/Register/RegisterOpt';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function Register() {
  const user = useSelector(state => state.user)
  console.log(user,"ussss")
  const navigate = useNavigate();
  let step
  if(user.userData) {
    step = user.userData.profileSetupStep
    if(user.userData.profileComplete) {
      setTimeout(()=>{
        navigate("/dashboard");
      })
    }
  }
  
  console.log(user,"asdasd")
  // step = 2
return (
  <React.Fragment>
    {step == null ? <RegisterStepOne/> :null}
    {step == 0 ? <RegisterStepTwo/> :null}
    {step == 1 ? <RegisterStepThree/> :null}
    {step == 2 ? <RegisterStepFour/> :null}
    {step == 3 ? <RegisterStepOtp/> :null}
  </React.Fragment>
 ) 
}

export default Register
