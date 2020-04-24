import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '' ,
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

    }
    handleChange =(event)=>{
        const { name, value } = event.target
        this.setState({[name]:value})
    }
    
    render(){

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required
                    /> 
                   

                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required 
                    />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
    
}

export default SignIn;