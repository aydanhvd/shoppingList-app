import { SET_APP_DATA } from '../untils/storeDataAS';
//Seters
export const MODULE_NAME = 'settings';
export const selectUserInfo = (state) => state[MODULE_NAME].userInfo;

//Action types
const SET_USER_INFO = 'SET_USER_INFO';

//State
const initialState = {
	userInfo: {
		userName: "John",
		userAvatarUrl: ''
	}
};

//Reducer
export function reducer(state = initialState, { type, payload }) {
	switch (type) {
      case SET_APP_DATA:
         return{
            ...state,
            ...payload.settings,
         }
      case SET_USER_INFO :
         return {
            ...state,
            userInfo: {
               userName: payload?.userName,
               userAvatarUrl: payload?.userAvatarUrl
            }
         }
		default:
			return state;
	}
}

//Action Creators
export const setUserInfo = (payload) => ({
	type: SET_USER_INFO,
	payload
});
