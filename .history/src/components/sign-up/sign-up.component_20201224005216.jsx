import React from 'react';

import { createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';


import './sign-up.styles.scss';

class signUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render() {
        const { disolayName, email, password, confirmPassword } = this.state
        return (
            <div className='title'>
                <h2>I do not have an acount</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' on submit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    ></FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    ></FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    ></FormInput>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirm Password'
                        required
                    ></FormInput>

                </form>
            </div>
        );
    }
}

export default signUp;