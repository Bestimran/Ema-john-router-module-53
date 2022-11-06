import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading]=useState(true)

const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const LogOut =()=>{
    setLoading(true);
    return signOut(auth)
}
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current user inside state change', currentUser);
        setUser(currentUser);
        setLoading(false)
       
    });
    return ()=> unSubscribe();

}, []);

    const AuthInfo = {user, loading, createUser, signIn, LogOut};
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;