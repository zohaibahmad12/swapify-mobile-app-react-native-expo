import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, isValidEmail, sendEmailVerification, onUserMetadataUpdate, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCUjGgJmqf8abxlQT4Kb_CBD9naqqcfgjw",
  authDomain: "swapify-6ed30.firebaseapp.com",
  projectId: "swapify-6ed30",
  storageBucket: "swapify-6ed30.appspot.com",
  messagingSenderId: "839400995274",
  appId: "1:839400995274:web:0f0a9e5889b1da8fc7b733"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
const db = getFirestore(firebaseApp);




const FirebaseContext = createContext();

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};



export const FirebaseContextProvider = ({ children }) => {


  const [currentUser, setCurrentUser] = useState(null);

  



  const getTheCurrentSignedInUser = () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {

        setCurrentUser(user)
        console.log("This User is authenticated");

        // if (user.emailVerified) {
        //   console.log("User is authenticated and email verified");
        // }

      } else {
        setCurrentUser(null)
        console.log("No user");
      }
    });


  }


  const signOutUser = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw error
    }
  };


  useEffect(() => {
    getTheCurrentSignedInUser();


  }, []);


 


  const signInWithGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {

      })
      .catch((error) => {

      })

  }









  const signupNewUser = async (email, password, fullName) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      const db = getFirestore();
      const userDocRef = doc(db, 'users', user.uid);

      await setDoc(userDocRef, {
        fullName,
      });

      // await sendEmailVerification(user)

    } catch (error) {

      throw error;
    }
  };


  const loginWithEmailPassword = async (email, password) => {

    try {

      await signInWithEmailAndPassword(auth, email, password)

    } catch (error) {

      throw error
    }
  }


  return (
    <FirebaseContext.Provider value={{ signupNewUser, loginWithEmailPassword, currentUser, signOutUser, signInWithGoogle}}>
      {children}
    </FirebaseContext.Provider>
  );
};

