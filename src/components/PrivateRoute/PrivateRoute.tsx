import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const PrivateRoute: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to='/sign_in' />;
};

export default PrivateRoute;
