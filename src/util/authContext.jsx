import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, createContext, useState, useEffect } from 'react'

const Authorization = createContext();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                localStorage.setItem("isUserSignedIn", true);
            }
            else {
                setUser(null);
                localStorage.removeItem("isUserSignedIn");
            };
        });
    }, [auth]);

    return (
        <Authorization.Provider value={user}>
            {children}
        </Authorization.Provider>
    );
};

export default AuthContext;

export const AuthState = () => {
    return useContext(Authorization);
};
