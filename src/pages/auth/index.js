import React from 'react';

import './index.styles.scss';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
