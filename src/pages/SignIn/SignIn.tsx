import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginUser, getUsers, reset } from '../../features/user/userSlice';
import { useFetchUsers } from '../../hooks/fetchUsers';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  cardStyles,
  boxStyles,
  cardContentStyles,
  textFieldStyles,
  typographyStyles,
  buttonStyles,
} from './styles';
import { FormDataTypes } from '../../@types';
import './SignIn.css';

const initialState: FormDataTypes = {
  email: '',
  password: '',
};

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormDataTypes>(initialState);
  const { isLoading, isSuccess, isError } = useAppSelector(
    (state) => state.user
  );
  const { data } = useFetchUsers();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      toast.success('Login Successful');
      dispatch(reset());
    }
    if (isError) {
      toast.error(isError);
    }
    // eslint-disable-next-line
  }, [isSuccess, isError]);

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onUserLogin = (): void => {
    dispatch(loginUser(email));
    dispatch(getUsers(data));
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div id='form-div'>
      <Card sx={cardStyles}>
        <Box sx={boxStyles}>
          <Typography sx={typographyStyles} component='div' variant='h5'>
            Sign In
          </Typography>
          <CardContent sx={cardContentStyles}>
            <TextField
              onChange={onChange}
              sx={textFieldStyles}
              id='email'
              label='Email'
              placeholder='johndoe@gmail.com'
              type='email'
              value={email}
            />
            <TextField
              onChange={onChange}
              sx={textFieldStyles}
              id='password'
              label='Password'
              placeholder='password'
              type='password'
              value={password}
            />
          </CardContent>
          <Button onClick={onUserLogin} sx={buttonStyles} variant='contained'>
            Sign In
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default SignIn;
