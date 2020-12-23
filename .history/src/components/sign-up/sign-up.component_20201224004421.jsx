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
        return (
            <div className='title'>
                <h2>I do not have an acount</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form'on submit></form>
            </div>
        );
    }
}

export default signUp;