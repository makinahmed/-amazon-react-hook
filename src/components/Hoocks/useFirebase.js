import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import initilizeFirebaseApp from '../../Firebase/firebase.initilize';
import { useHistory } from 'react-router';

initilizeFirebaseApp();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory()
    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
           
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError(user);
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
         
            setUser({});
            history.push("/login")
           
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        logOut, user,setUser,setError, signInWithGoogle
    }

};

export default useFirebase;