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
            <div className></div>
         );
    }
}

export default signUp;