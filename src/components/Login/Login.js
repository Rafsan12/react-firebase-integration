import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>please log in</h3>
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