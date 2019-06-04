import * as firebase from 'firebase'
import 'firebase/auth'

export const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export const Firebase = firebase.initializeApp(config)

export const Auth = () => {

  const auth = Firebase.auth()

  return auth;
}

export const Database = () => {

  const database = Firebase.database()

  return database;

}

export const doCreateUserWithEmailAndPassword = (email, password) => {
    return Firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const doSignInWithEmailAndPassword = (email, password) => {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
}

export const doSignOut = () => new firebase.auth().signOut()

export const doPasswordReset = email => Firebase.auth().sendPasswordResetEmail(email)

export const doPasswordUpdate = password => Firebase.auth().currentUser.updatePassword(password)

export const User = () => {return Firebase.auth().currentUser}


//Social Login

let GoogleProvider =  new firebase.auth.GoogleAuthProvider()

let FacebookProvider = new firebase.auth.FacebookAuthProvider()

let GithubProvider = new firebase.auth.GithubAuthProvider()

let TwitterProvider = new firebase.auth.TwitterAuthProvider()

export const googleLogin = () =>  new firebase.auth().signInWithPopup(GoogleProvider)


export const facebookLogin = () => new firebase.auth().signInWithPopup(FacebookProvider)

export const githubLogin = () => new firebase.auth().signInWithPopup(GithubProvider)

export const twitterLogin = () => new firebase.auth().signInWithPopup(TwitterProvider)
