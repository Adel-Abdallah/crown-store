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
            <div className='title'>I do not have an acount</div>
            signUp
        );
    }
}

export default signUp;