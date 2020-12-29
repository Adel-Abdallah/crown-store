import {userActionTypes} from './user.types'
export const setCurrentUser = user => ({
    type: 'SET_CURRENT-USER',
    payload: user
});