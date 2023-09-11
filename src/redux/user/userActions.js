import { SET_USER_DATA }  from './userTypes';

export const setUserData = (userData,token) => {
  return {
    type: SET_USER_DATA,
    userData:userData,
    token:token
  }
}  