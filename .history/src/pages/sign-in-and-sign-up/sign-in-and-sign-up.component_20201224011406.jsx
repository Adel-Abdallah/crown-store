import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-up.styles.scss';
import signUp from '../../components/sign-up.'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <signUp/>
        </div>
    );
}

export default SignInAndSignUpPage;