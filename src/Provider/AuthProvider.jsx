// import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("From Auth User ->", user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const authinfo = {
    user,
    createUser,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
