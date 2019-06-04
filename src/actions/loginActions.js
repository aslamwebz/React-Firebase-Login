import {GETFIREBASE, GET_USER, SET_ERRORS,SIGN_IN,SIGN_IN_TWITTER, SIGN_IN_FACEBOOK,SIGN_IN_GITHUB,SIGN_IN_GOOGLE,SIGN_OUT,SIGN_UP} from '../actions/types'
import { Firebase, User,
doSignInWithEmailAndPassword,
doCreateUserWithEmailAndPassword,
googleLogin,facebookLogin,githubLogin,  twitterLogin } from '../components/firebase'

export const getFirebase = () => dispatch => {
    dispatch({
        type:GETFIREBASE,
        payload:Firebase
    })
}

export const getUser = () => dispatch => {
    const user = User()
    dispatch({
        type:GET_USER,
        payload:user
    })
}

export const signIn = (email, password) => dispatch => {
    doSignInWithEmailAndPassword(email, password)
    .then(data => {
        dispatch({
            type:SIGN_IN,
            payload:data
        })
    })
    .catch(err => {
        dispatch({
            type:SET_ERRORS,
            payload:err.message
        })
    })
}

export const signInFacebook = (history) => dispatch => {
    facebookLogin()
    .then(result => {
        dispatch({
            type:GET_USER,
            payload:result
        })
        history.push('/')
    })
    .catch(err => 
        dispatch({
            type:SET_ERRORS,
            payload:err.message
        })
    )
}

export const signInGoogle = (history) => dispatch => {
    googleLogin()
    .then(result => {
        dispatch({
            type:GET_USER,
            payload:result
        })
        history.push('/')
    })
    .catch(err => 
        dispatch({
            type:SET_ERRORS,
            payload:err.message
        })
    )
}

export const signInGithub = (history) => dispatch => {
    githubLogin()
    .then(result => {
        dispatch({
            type:GET_USER,
            payload:result
        })
        history.push('/')
    })
    .catch(err => 
        dispatch({
            type:SET_ERRORS,
            payload:err.message
        })
    )
}

export const signInTwitter = (history) => dispatch => {
    twitterLogin()
    .then(result => {
        dispatch({
            type:GET_USER,
            payload:result
        })
        history.push('/')
    })
    .catch(err => 
        dispatch({
            type:SET_ERRORS,
            payload:err.message
        })
    )
}

export const signUp = (email, password, history) => dispatch => {
    doCreateUserWithEmailAndPassword(email, password)
    .then(result => {
        dispatch({
            type:GET_USER,
            payload:result
        })
        history.push('/')
    })
    .catch(err => 
        dispatch({
            type:SET_ERRORS,
            payload:err.message
        })
    )
}