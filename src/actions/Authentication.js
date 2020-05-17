import React from 'react'
import {firebase, googleAuthProvider} from '../firebaseDB/firebase'

export const startLogin = () =>{
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}

export const login = (uid) =>{
    return {
        type: 'LOGIN',
        uid
    }
}

export const logout = () =>{
    return {
        type: 'LOGOUT'
    }
}