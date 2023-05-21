import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Swal from 'sweetalert2';

export const AuthContext = createContext(app)

// firebase auth
const auth = getAuth();

// firebase provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // error message
    const errorToast = (msg) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: `${msg}`
          })
    }

    // success message
    const successToast = (msg) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${msg}`,
          })
    }


    // signUp with email&password
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with email && password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // singIn with google
    const  googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // onAuthChange
    useEffect( () => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    } , [])

    // logOut 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // share all context
    const authInfo = {
        user,
        googleSignIn,
        signUp,
        signIn,
        logOut,
        errorToast,
        successToast,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;