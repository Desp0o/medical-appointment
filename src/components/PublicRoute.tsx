import { Navigate, Outlet } from 'react-router-dom';
import { UseUserHook } from '../hooks/UseUserHook';

const PublicRoute = () => {
  const { user } = UseUserHook();

  return !user.isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
