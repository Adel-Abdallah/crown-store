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
                <spn>Sign up with your email and password</spn>
            </div>
        );
    }
}

export default signUp;