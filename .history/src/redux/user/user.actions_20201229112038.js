import {userActionTypes} from './user.types'
export const setCurrentUser = user => ({
    type: userActionTypes'SET_CURRENT-USER',
    payload: user
});