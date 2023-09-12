import React from 'react';

import RegisterStepOne from 'components/Register/RegisterStepOne'
import RegisterStepTwo from 'components/Register/RegisterStepTwo'
import RegisterStepThree from 'components/Register/RegisterStepThree'
import {useSelector} from 'react-redux'
import RegisterStepFour from 'components/Register/RegisterStepFour'
import RegisterStepOtp from 'components/Register/RegisterOpt';

function Register() {
  const user = useSelector(state => state.user)
  let step = 4
  if(user.userData) {
    step = user.userData.profileSetupStep
  }
  console.log(user,"asdasd")
  // step = 0
return (
  <React.Fragment>
    {step == null ? <RegisterStepOne/> :null}
    {step == 0 ? <RegisterStepTwo/> :null}
    {step == 2 ? <RegisterStepThree/> :null}
    {step == 3 ? <RegisterStepFour/> :null}
    {step == 4 ? <RegisterStepOtp/> :null}
  </React.Fragment>
 ) 
}

export default Register
