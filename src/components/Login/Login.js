import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>please log in</h3>
            <div style={{margin:'20px'}}>
               <button onClick={singInWithGoogle}>Google Sing In</button> 
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