import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import auth from "../Firebase/Firebase";
import { useState } from "react";
import { useEffect } from "react";


// create a context
export const AuthContext = createContext(null)


//gogle login Provider
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {


    //state for hold a user
    const [user, setUser] = useState(null)

    //loading set loading
    const [loading,setLoading] = useState(true)

    //create a user functionality   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login functionality

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout functionality
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    //google Login functionality
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }




    //observe user by useEffect
    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    }, [])





    //auth info as value
    const authInfo = { createUser, logInUser,user,logOut,googleLogin,loading }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;