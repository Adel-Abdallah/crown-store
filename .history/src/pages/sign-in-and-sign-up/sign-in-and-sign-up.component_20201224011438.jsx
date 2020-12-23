import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-up.styles.scss';
import signUp from '../../components/sign-up.component'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <ignUp/>
        </div>
    );
}

export default SignInAndSignUpPage;