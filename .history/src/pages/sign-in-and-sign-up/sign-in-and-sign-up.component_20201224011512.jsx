import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-up.styles.scss';
import Sign from '../../components/sign-in/sign-in.component'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp/>
        </div>
    );
}

export default SignInAndSignUpPage;