import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logoutUser, reset } from '../../features/user/userSlice';
import { toast } from 'react-toastify';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { boxStyles, textColorStyles, toolbarStyles } from './styles';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { user, isSuccess } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && isSuccess) {
      navigate('/sign_in');
      toast.success('Logout Successful');
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  const onUserLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div id='navbar-div'>
      <Box sx={boxStyles}>
        <AppBar position='static'>
          <Toolbar sx={toolbarStyles}>
            <Link to='/'>
              <Typography variant='h6' component='div' sx={textColorStyles}>
                Home
              </Typography>
            </Link>
            {user ? (
              <Button
                onClick={onUserLogout}
                color='inherit'
                sx={textColorStyles}
              >
                Logout
              </Button>
            ) : (
              <Link to='/sign_in'>
                <Button color='inherit' sx={textColorStyles}>
                  Login
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
