import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr className="signup-hr"/>
            <div>
                <input type="radio" name="radio-t" checked/>
                <label htmlFor="Tutee"><b>Tutee</b></label>
                <input type="radio" name="radio-t"/>
                <label htmlFor="Tutor"><b>Tutor</b></label>
            </div>
            <div className="signup-form">
                <div className="signup-label">
                    <label htmlFor="name"><b>Name</b></label>
                </div>
                <input 
                    className="signup-input"
                    type="text" 
                    placeholder="Enter Name" 
                    name="name" 
                    required 
                />
            </div>
            <div className="signup-form">
                <div className="signup-label">
                    <label htmlFor="email"><b>Email</b></label>
                </div>
                <input 
                    className="signup-input"
                    type="text" 
                    placeholder="Enter Email" 
                    name="email" 
                    required 
                />
            </div>
            <div className="signup-form">
                <div className="signup-label">                    
                    <label htmlFor="psw"><b>Password</b></label>
                </div>
                <input
                    className="signup-input"
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                />
            </div>
            <div className="signup-form">
                <div className="signup-label">
                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                </div>
                <input 
                    className="signup-input"
                    type="password" 
                    placeholder="Repeat Password" 
                    name="psw-repeat" 
                    required 
                />
            </div>
            <div>
              <button type="submit" className="signup-btn">Sign Up</button>
            </div>    
        </div>        
    );
}

export default SignUp;