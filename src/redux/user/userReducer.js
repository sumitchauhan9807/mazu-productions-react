/* eslint-disable */ 
import {SET_USER_DATA,UPDATE_SETUP_STEP,LOG_OUT_USER,CHNAGE_USERNAME} from './userTypes'

const initialState = {
  userData: null,
  token:null,
}

const userReducer = (state = initialState,action) => {
  // console.log(action)
  switch(action.type) { 
    case SET_USER_DATA :
      return {
        ... state,
        userData:action.userData,
        token:action.token,
        stateUpdated:true
      }
      case UPDATE_SETUP_STEP :
        let userData = state.userData
        userData.profileSetupStep = action.stepCount
        return {
          ... state,
          userData:userData,
        }
        case LOG_OUT_USER :
        return {
          userData:null,
          token:null,
        }
        case CHNAGE_USERNAME :
          let UuserData = state.userData
          UuserData.username = 'ssssssssssss'
        return {
          ... state,
          userData:UuserData
        }
    default : return state
  }
}

export default userReducer