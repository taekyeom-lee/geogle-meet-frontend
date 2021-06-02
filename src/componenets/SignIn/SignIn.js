import React from 'react';
import './SignIn.css';
import { auth, firestore } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignInTutor: 'off',
            signInEmail: '',
            signInPassword: ''
        }
    }

    onSignInTuteeCheckChange = () => {
        this.setState({isSignInTutor: "off"})
    }

    onSignInTutorCheckChange = (event) => {
        this.setState({isSignInTutor: event.target.value})
    }

    onSignInEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onSignInPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = event => {
        event.preventDefault();
        const { signInEmail, signInPassword, isSignInTutor } = this.state;
        const userRef = firestore.doc(`users/${signInEmail}`);
        userRef.get().then((doc) => {   
            if (doc.exists && (isSignInTutor === doc.data().isTutor)) {            
                try {                    
                    auth.signInWithEmailAndPassword(signInEmail, signInPassword);
                    this.setState({
                        isSignInTutor: 'off',
                        signInEmail: '',
                        signInPassword: ''
                    });
                    this.props.history.push('/')                   
                } catch (error) {
                    console.log("signin error", error);
                }
            } else {
                alert("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
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

export default withRouter(SignIn);