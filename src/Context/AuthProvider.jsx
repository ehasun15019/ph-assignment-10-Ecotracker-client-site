import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //createUser for register
  const createUserFunction = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* SignInWithPopUp functionality start */
  const loginFunction = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, email, password);
  };
  /* SignInWithPopUp functionality end */

  /* login with email, password functionality start */ 
  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  /* login with email, password functionality end */ 


  /* Password Reset Email start */ 
  const sendPasswordLink = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
  }
  /* Password Reset Email end */ 

  // unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUserFunction,
    loginFunction,
    loginWithEmailPassword,
    sendPasswordLink,
    user,
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
