import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  const googleSignIn = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
  };

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
        onClick={googleSignIn}
        className={`btn btn-outline ${googleLoading ? 'loading' : ''}`}
      >
        {googleLoading ? '' : 'Continue With Google'}
      </button>
    </>
  );
};

export default GoogleSignIn;
