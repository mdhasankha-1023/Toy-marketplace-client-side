import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(app)

// firebase auth
const auth = getAuth();

// firebase provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // signUp with email&password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with email && password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // singIn with google
    const  googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // signIn with github
    const githubSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // onAuthChange
    useEffect( () => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            loading(true)
        })
        return () => {
            unSubscribe();
        }
    } , [])

    // logOut 
    const logOut = () => {
        return signOut(auth)
    }


    // share all context
    const authInfo = {
        user,
        googleSignIn,
        githubSignIn,
        signUp,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;