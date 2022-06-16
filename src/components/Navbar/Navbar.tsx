import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { boxStyles, textColorStyles, toolbarStyles } from './styles';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

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
              <Button color='inherit' sx={textColorStyles}>
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
