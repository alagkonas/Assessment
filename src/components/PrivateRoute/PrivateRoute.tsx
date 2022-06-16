import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const PrivateRoute: React.FC = () => {
  const { authUser } = useAppSelector((state) => state.user);

  return authUser ? <Outlet /> : <Navigate to='/sign_in' />;
};

export default PrivateRoute;
