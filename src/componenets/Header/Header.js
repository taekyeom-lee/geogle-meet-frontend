import React from 'react';
import { Link } from "react-router-dom"
import logo from '../../img/logo.svg';
import './Header.css';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <div className='header-sub'>
                <Link to="/" className='header-logo'>
                    <img className='header-img' alt="logo" src={logo} />
                    <p className='header-name'>Geogle Meet</p>
                </Link>                
                <div className='header-options'>
                    {
                        currentUser ? (
                            <div 
                                className='header-option' 
                                onClick={() => 
                                    auth.signOut().then(() => {
                                        alert("signout success")
                                    }).catch((error) => {
                                        console.log("signout error ", error)
                                    })
                                }>Sign out</div>                            
                        ) : (
                            <div>                                
                                <Link to="/signin" className='header-option'>Sign In</Link>
                                <Link to="/signup" className='header-option'>Sign Up</Link>
                            </div>
                        ) 
                    }
                </div>
            </div>            
        </div>
    )
}

export default Header;