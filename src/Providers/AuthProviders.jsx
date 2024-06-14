import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password, name) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password, name);
  }

  // google sign in
  const googleSignIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  // github sign in

  const githubSignIn = (githubProvider) => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updatePRf = (name, photoURL) => {
    // setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
    // .then(() => {
    //   setUser({ ...auth.currentUser, displayName: name, photoURL: photoURL })
    // })
    // .catch(error => {
    //   console.error(error.message);
    // })
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
            }
          })
      }
      else {
        // Todo:remove token 
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [axiosPublic])

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    githubSignIn,
    updatePRf,
    loading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;