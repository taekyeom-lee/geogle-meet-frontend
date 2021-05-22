import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="signin">
            <h1>Sign In</h1>
            <hr className="signin-hr"/>
            <div>
                <input type="radio" name="radio-t" checked/>
                <label htmlFor="Tutee"><b>Tutee</b></label>
                <input type="radio" name="radio-t"/>
                <label htmlFor="Tutor"><b>Tutor</b></label>
            </div>
            <div className="signin-form">
                <div className="signin-label">
                    <label htmlFor="email"><b>Email</b></label>
                </div>
                <input 
                    className="signin-input"
                    type="text" 
                    placeholder="Enter Email" 
                    name="email" 
                    required 
                />
            </div>
            <div className="signin-form">
                <div className="signin-label">                    
                    <label htmlFor="psw"><b>Password</b></label>
                </div>
                <input
                    className="signin-input"
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                />
            </div>
            <div>
              <button type="submit" className="signin-btn">Sign In</button>
            </div>    
        </div>  
    );
}

export default SignIn;