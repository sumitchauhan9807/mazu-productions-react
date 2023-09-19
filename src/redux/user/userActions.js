import { SET_USER_DATA ,UPDATE_SETUP_STEP,LOG_OUT_USER,CHNAGE_USERNAME }  from './userTypes';

export const setUserData = (userData,token) => {
  return {
    type: SET_USER_DATA,
    userData:userData,
    token:token
  }
}

export const updateSetupStep = (step) => {
  return {
    type: UPDATE_SETUP_STEP,
    stepCount:step
  }
}

export const logoutUser = () => {
  return {
    type: LOG_OUT_USER,
  }
}

export const changeUserName  = () =>{
  return {
    type:CHNAGE_USERNAME
  }
}