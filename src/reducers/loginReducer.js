import {GETFIREBASE, GET_USER, SET_ERRORS,SIGN_IN,SIGN_IN_FACEBOOK,SIGN_IN_GITHUB,SIGN_IN_GOOGLE,SIGN_OUT,SIGN_UP} from '../actions/types'

const initialState = {
    firease:[],
    user:[],
}

export default function(state = initialState, action){
    switch(action.type){
        case GETFIREBASE:
            return{
                ...state, 
                firebase:action.payload
            }
        case GET_USER:
            return{
                ...state,
                user:action.payload
            }
        case SIGN_IN:
            return {
                ...state,
                user:action.payload
            }
        case SET_ERRORS:
            return {
                ...state,
                err:action.payload
            }
            default:
                return state
    }
}