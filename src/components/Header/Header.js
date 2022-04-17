import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
  const {user} = useFirebase
    return (
        <div className='header'>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Orders">Orders</Link>
          <Link to="/register">Register</Link>
            {
              user.uid
              ?
              <button>Sing out</button>
              :
              <Link to="/login">Login</Link>
              }
          </nav>
        </div>
    );
};

export default Header;