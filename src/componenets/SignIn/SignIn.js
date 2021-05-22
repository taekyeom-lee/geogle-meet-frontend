import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            isSignInTutee: 'on',
            isSignInTutor: 'off',
            signInEmail: '',
            signInPassword: ''
        }
    }

    onSignInTuteeCheckChange = (event) => {
        this.setState({isSignInTutee: event.target.value})
        this.setState({isSignInTutor: "off"})
    }

    onSignInTutorCheckChange = (event) => {
        this.setState({isSignInTutor: event.target.value})
        this.setState({isSignInTutee: "off"})
    }

    onSignInEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onSignInPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
    }

    render() {
        return (
            <div className="signin">
                <h1>Sign In</h1>
                <hr className="signin-hr"/>
                <form>
                    <div>
                        <input 
                            type="radio" 
                            name="radio-t" 
                            defaultChecked
                            onChange={this.onSignInTuteeCheckChange}
                        />
                        <label htmlFor="Tutee"><b>Tutee</b></label>
                        <input 
                            type="radio" 
                            name="radio-t"
                            onChange={this.onSignInTutorCheckChange}
                        />
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
                            onChange={this.onSignInEmailChange}
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
                            onChange={this.onSignInPasswordChange}
                        />
                    </div>
                    <div>
                        <button 
                            type="reset" 
                            className="signin-cancelbtn"
                            >Reset</button>
                        <button 
                            type="submit" 
                            className="signin-btn"
                            onClick={this.onSubmitSignIn}
                            >Sign In</button>
                    </div>
                </form>  
            </div>  
        );
    }
}

export default SignIn;