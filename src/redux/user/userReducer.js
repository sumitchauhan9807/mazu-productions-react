/* eslint-disable */ 
import {SET_USER_DATA,UPDATE_SETUP_STEP} from './userTypes'

const initialState = {
  userData: null,
  token:null
}

const userReducer = (state = initialState,action) => {
  switch(action.type) { 
    case SET_USER_DATA :
      return {
        ... state,
        userData:action.userData,
        token:action.token
      }
      case UPDATE_SETUP_STEP :
        let userData = state.userData
        userData.profileSetupStep = action.stepCount
        return {
          ... state,
          userData:userData,
        }
    default : return state
  }
}

export default userReducer