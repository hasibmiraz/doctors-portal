import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = async ({ email }) => {
    await sendPasswordResetEmail(email);
    toast.promise(
      sendPasswordResetEmail(email),
      {
        loading: 'Sending Email!',
        success: 'Plase check your email!',
        error: "Couldn't send email!",
      },
      {
        style: {
          minWidth: '250px',
          background: '#0FCFEC',
          color: 'white',
        },
        success: {
          duration: 4000,
          icon: '🔥',
        },
      }
    );
  };

  let errorMessage;
  if (error) {
    errorMessage = (
      <p className="text-red-600 text-center">Authentication failed</p>
    );
  }
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
            {error && errorMessage}
            <button
              disabled={sending}
              className={`btn w-full max-w-xs text-white ${
                sending ? 'loading' : ''
              }`}
              type="submit"
            >
              {sending ? 'Sending' : 'Send Email'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
