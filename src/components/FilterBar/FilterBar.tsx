import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { filterByUser } from '../../features/user/userSlice';
import Spinner from '../Spinner';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { UsersType } from '../../@types';
import './FilterBar.css';

const FilterBar: React.FC = () => {
  const [value, setValue] = useState<UsersType | null>(null);
  const { users: apiUsers, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const users: UsersType[] | undefined = apiUsers?.map((user) => {
    return {
      label: user.name,
      id: user.id,
    };
  });

  if (isLoading) return <Spinner />;

  return (
    <div id='filterbar-div'>
      <Autocomplete
        onChange={(e: any, newValue: UsersType | null) => {
          setValue(newValue);
          //@ts-ignore
          dispatch(filterByUser(newValue));
        }}
        disablePortal
        value={value}
        id='combo-box-demo'
        options={users!}
        sx={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            id='id'
            label='Filter by users'
            data-testid='CloseIcon'
          />
        )}
      />
    </div>
  );
};

export default FilterBar;
