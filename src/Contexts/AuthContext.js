import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"; // import Firebase authentication module

// create an AuthContext using createContext() function
const AuthContext = React.createContext();

// create a custom hook that returns the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// create a React component that provides the AuthContext
export function AuthProvider({ children }) {
  // use the useState hook to create a state variable currentUser
  const [currentUser, setCurrentUser] = useState();

  // define a signup function that uses Firebase authentication
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // use the useEffect hook to add an authentication state change listener
  useEffect(() => {
    // add the listener and set the currentUser state variable
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    // remove the listener when the component unmounts
    return unsubscribe;
  }, []);

  // define the value to be passed to children components through the AuthContext
  const value = {
    currentUser,
    signup,
  };

  // return the AuthContext.Provider component, which wraps the children components and provides the AuthContext value
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
