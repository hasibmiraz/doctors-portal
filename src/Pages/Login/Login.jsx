import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn.jsx';
import useToken from '../../hooks/useToken.js';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = async ({ email, password }) => {
    await signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

  let errorMessage;

  if (error) {
    errorMessage = (
      <p className="text-red-600 text-center">Authentication failed</p>
    );
  }

  if (user) console.dir(user);

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl">Login</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className={`input input-bordered w-full max-w-xs ${
                  errors?.email?.message ? 'input-error' : ''
                }`}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email address required!',
                  },

                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Provide a valid email',
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
              <p>
                {errors.email?.type === 'pattern' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.email?.message}
                  </span>
                )}
              </p>
            </div>
            {/* Email field */}
            <div className="w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className={`input input-bordered w-full max-w-xs ${
                  errors?.password?.message ? 'input-error' : ''
                }`}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required!',
                  },

                  minLength: {
                    value: 6,
                    message: 'Must be atleast 6 characters',
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                )}
              </label>
              <p className="label">
                {errors.password?.type === 'minLength' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                )}
              </p>
            </div>
            {error && errorMessage}
            <div className="mb-3">
              <Link
                to="/reset-password"
                className="text-secondary text-xs mb-3 pl-2"
              >
                Forgot Password
              </Link>
            </div>
            <button
              disabled={loading}
              className={`btn w-full max-w-xs text-white ${
                loading ? 'loading' : ''
              }`}
              type="submit"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-xs text-center">
            New to doctors's portal?{' '}
            <span className="text-secondary">
              <Link to="/register">Create a new account</Link>
            </span>
          </p>

          <div className="divider">OR</div>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
