import {   useEffect, useState } from "react"
import app from "../firebase.init";
import {getAuth , GoogleAuthProvider,  onAuthStateChanged,  signInWithPopup, signOut , } from 'firebase/auth';


const auth =getAuth(app)
const googleProvider = new GoogleAuthProvider()


const useFirebase = () =>{
    const [user ,setUser] = useState({});
   
    const singInWithGoogle =() =>{
       signInWithPopup (auth , googleProvider)
       .then(result =>{
           const user = result.user;
           setUser(user)

       })
    }
    const handleSingOut = () =>{
        signOut(auth)
        .then(() =>{})
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user);

        })
    }, [])
   
    return { user , handleSingOut: handleSingOut , singInWithGoogle}
}


export default useFirebase;