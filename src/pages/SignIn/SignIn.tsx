import { useState } from 'react';
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

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

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
          <Button sx={buttonStyles} variant='contained'>
            Sign In
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default SignIn;
