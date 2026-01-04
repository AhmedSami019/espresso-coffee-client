import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    // to create use by firebase
    const createUserWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUserWithEmail
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;