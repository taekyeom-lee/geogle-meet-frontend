import React from 'react';
import './SignUp.css';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            isTutor: 'off',
            name: '',
            email: '',
            password: ''
        }
    }

    onTuteeCheckChange = (event) => {
        this.setState({isTutor: "off"})
    }

    onTutorCheckChange = (event) => {
        this.setState({isTutor: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignUp = async event => {
        event.preventDefault();
        const { name, email, password, isTutor } = this.state;
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { name, isTutor });
            this.setState({
                isTutor: 'off',
                name: '',
                email: '',
                password: ''
            });
            this.props.history.push('/')
        } catch (error) {
            console.log("error signup " + error);
        }
    }

    render() {
        return (
            <div className="signup">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr className="signup-hr"/>
                <form>
                    <div>
                        <input 
                            type="radio" 
                            name="radio-t" 
                            defaultChecked
                            onChange={this.onTuteeCheckChange}
                        />
                        <label htmlFor="Tutee"><b>Tutee</b></label>
                        <input 
                            type="radio" 
                            name="radio-t"
                            onChange={this.onTutorCheckChange}
                        />
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
                            onChange={this.onNameChange}
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
                            onChange={this.onEmailChange}
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
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button 
                            type="reset" 
                            className="signup-cancelbtn"
                        >Reset</button>
                        <button 
                            type="submit" 
                            className="signup-btn"
                            onClick={this.onSubmitSignUp}
                        >Sign Up</button>
                    </div>                    
                </form>
                    
            </div>        
        );
    }
}

export default withRouter(SignUp);