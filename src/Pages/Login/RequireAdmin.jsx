import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner';

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();

  if (adminLoading || loading) {
    return (
      <div className="my-20">
        <Spinner />
      </div>
    );
  }

  if (!admin || !user) {
    localStorage.removeItem('accessToken');
    signOut(auth);
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
