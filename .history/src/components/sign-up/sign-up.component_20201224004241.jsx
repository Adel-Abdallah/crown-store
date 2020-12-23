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
                <h2>
                    </h2></div>
            <spn>Sign up with your email and password</spn>
        );
    }
}

export default signUp;