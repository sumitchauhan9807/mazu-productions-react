import React from 'react';

import RegisterStepOne from 'components/Register/RegisterStepOne'
import RegisterStepTwo from 'components/Register/RegisterStepTwo'


function Register() {

  let step = 1
return (
  <React.Fragment>
    {step == 1 ? <RegisterStepOne/> :null}
    {step == 2 ? <RegisterStepTwo/> :null}
  </React.Fragment>
 ) 
}

export default Register
