import React from 'react';

import RegisterStepOne from 'components/Register/RegisterStepOne'
import RegisterStepTwo from 'components/Register/RegisterStepTwo'
import RegisterStepThree from 'components/Register/RegisterStepThree'
import {useSelector} from 'react-redux'
import RegisterStepFour from 'components/Register/RegisterStepFour'
import RegisterStepOtp from 'components/Register/RegisterOpt';

function Register() {
  const user = useSelector(state => state.user)
  let step = 2
  if(user.userData) {
    step = user.userData.profileSetupStep
  }
  console.log(user,"asdasd")
  // step = null
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
