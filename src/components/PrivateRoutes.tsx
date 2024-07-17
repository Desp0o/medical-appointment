import { Navigate, Outlet } from 'react-router-dom';
import { UseUserHook } from '../hooks/UseUserHook';

const PrivateRoute = () => {
    const { user } = UseUserHook()
  return user.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
