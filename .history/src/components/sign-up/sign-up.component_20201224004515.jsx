import React from 'react';

import { createUserProfileDocument } from '../../firebase/firebase.utils'


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
        const 
        return (
            <div className='title'>
                <h2>I do not have an acount</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' on submit={this.handleSubmit}></form>
            </div>
        );
    }
}

export default signUp;