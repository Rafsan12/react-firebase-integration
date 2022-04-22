import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init'

const auth = getAuth(app)


const Login = () => {
    const [singInWithGoogle, user ] = useSignInWithGoogle(auth)
   
    return (
        <div>
            <h3>please log in</h3>
            <div style={{margin:'20px'}}>
               <button onClick={() =>singInWithGoogle()}>Google Sing In</button> 
            </div>
            <form>
            <input type="text" placeholder='Your Name' />
            <br />
            <input type="email" placeholder='Your Email' />

            <br />

            <input type="password" name="" placeholder='password'   value="" />

            <br />
            <input type="submit" value="Login" />
        </form>
        </div>
    );
};

export default Login;