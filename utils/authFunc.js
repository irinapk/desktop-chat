import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addUser, getUserById } from "../api/user";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { setUserData } from "./store";

function signUp(name, email, password, setError, onSuccess) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log(user.uid);
      let newUser = {
        id: user.uid,
        name: name,
        email: email,
      };
      addUser(newUser);
      onSuccess();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(error);
      setError(errorMessage);
    });
}

function signIn(email, password, setError, onLogin) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      const loginUser = getUserById(user.uid);
      if (loginUser) {
        setUserData(loginUser);
      }

      onLogin();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      setError(errorMessage);
    });
}

const useAuth = () => {
  //   const { session } = require("electron");
  //   const [user, setUser] = useState(null);
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   //   useEffect(() => {
  //   //     auth.onAuthStateChanged((user) => {
  //   //       setIsLoggedIn(user && user.uid ? true : false);
  //   //       setUser(user);
  //   //     });
  //   //   });
  //   getUserData().then((res) => console.log("result", res));
  //   return { user, isLoggedIn };
};

export { signUp, signIn, useAuth };
