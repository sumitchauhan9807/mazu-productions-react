import React from 'react';

import RegisterStepOne from 'components/Register/RegisterStepOne'
import RegisterStepTwo from 'components/Register/RegisterStepTwo'
import RegisterStepThree from 'components/Register/RegisterStepThree'
import {useSelector} from 'react-redux'

function Register() {
  const user = useSelector(state => state.user)
  let step = null
  if(user.userData) {
    step = user.userData.profileSetupStep
  }
  console.log(user,"asdasd")
  // step = 0
return (
  <React.Fragment>
    {step == null ? <RegisterStepOne/> :null}
    {step == 0 ? <RegisterStepTwo/> :null}
    {step == 1 ? <RegisterStepThree/> :null}
  </React.Fragment>
 ) 
}

export default Register
