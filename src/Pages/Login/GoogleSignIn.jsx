import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let errorMessage;

  if (googleError) {
    errorMessage = (
      <p className="text-red-600 text-center">Authentication failed</p>
    );
  }
  if (googleUser) console.dir(googleUser);
  return (
    <>
      {googleError && errorMessage}
      <button
        disabled={googleLoading}
        onClick={() => signInWithGoogle()}
        className={`btn btn-outline ${googleLoading ? 'loading' : ''}`}
      >
        {googleLoading ? '' : 'Continue With Google'}
      </button>
    </>
  );
};

export default GoogleSignIn;
