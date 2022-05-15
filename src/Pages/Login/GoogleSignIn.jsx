import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const GoogleSignIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(googleUser);

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

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
