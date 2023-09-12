import { SET_USER_DATA ,UPDATE_SETUP_STEP }  from './userTypes';

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