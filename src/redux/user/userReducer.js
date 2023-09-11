/* eslint-disable */ 
import {SET_USER_DATA} from './userTypes'
const initialState = {
  userData: null,
  token:null
}

const userReducer = (state = initialState,action) => {
  console.log("i am here")
  switch(action.type) { 
    case SET_USER_DATA :
      return {
        ... state,
        userData:action.userData,
        token:action.token
      }
    default : return state
  }
}

export default userReducer