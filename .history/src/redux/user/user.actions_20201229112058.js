import {userActionTypes} from './user.types'
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT-USER,
    payload: user
});