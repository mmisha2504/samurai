import { stopSubmit } from "redux-form";
import {authAPI} from "../API/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  id: null ,
  email:null,
   login: null, 
    isFetching: false,
    isAuth: false
};

const authReducer = (state=initialState, action)=>{
switch(action.type){
   case SET_USER_DATA: 
      return {
         ...state,
          ...action.payload
      }

   default:
         return state;
} 
};


export const setAuthUserData = (id, email, login, isAuth)=> 
({ type: SET_USER_DATA, payload:{id,email,login, isAuth}});
export const getAuthUserData = ()=> (dispatch) => {
   authAPI.me()
   .then ( response=>{     
    let {id, email, login} = response.data.data;
    if (response.data.resultCode === 0) {
        dispatch (setAuthUserData(id, email, login, true));
    }
        })
};
export const login = (email, password, rememberMe)=> (dispatch) => {

    authAPI.login(email, password, rememberMe)
    .then ( response=>{     
     if (response.data.resultCode === 0) {
         dispatch (getAuthUserData());        
     }
     else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] 
        : 'Some Huynya!'
        dispatch(stopSubmit("login", {_error: "Проёб!!!"} ));
     }
         })
 };
 export const logout = ()=> (dispatch) => {
    authAPI.logout()
    .then ( response=>{     
     if (response.data.resultCode === 0) {
        dispatch (setAuthUserData(null, null, null, true));
     }
         })
 };


export default authReducer;