import React from 'react';

import RegisterStepOne from 'components/Register/RegisterStepOne'
import RegisterStepTwo from 'components/Register/RegisterStepTwo'
import RegisterStepThree from 'components/Register/RegisterStepThree'


function Register() {

  let step = 3
return (
  <React.Fragment>
    {step == 1 ? <RegisterStepOne/> :null}
    {step == 2 ? <RegisterStepTwo/> :null}
    {step == 3 ? <RegisterStepThree/> :null}
  </React.Fragment>
 ) 
}

export default Register
