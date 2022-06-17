import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInitialStateTypes, ApiUsersTypes, UsersType } from '../../@types';

const authUser: string = JSON.parse(localStorage.getItem('authUser')!);
const apiUsers: ApiUsersTypes[] = JSON.parse(localStorage.getItem('apiUsers')!);

const initialState: userInitialStateTypes = {
  authUser: authUser ? authUser : null,
  users: apiUsers ? apiUsers : null,
  filteredUser: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const loginUser = createAsyncThunk(
  'user/login',
  (userData: string, thunkAPI) => {
    try {
      localStorage.setItem('authUser', JSON.stringify(userData));
      return userData;
    } catch (error: any) {
      const message = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUsers = createAsyncThunk(
  'users/getAll',
  (usersData: ApiUsersTypes[], thunkAPI) => {
    try {
      localStorage.setItem('apiUsers', JSON.stringify(usersData));
      return usersData;
    } catch (error: any) {
      const message = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const filterByUser = createAsyncThunk(
  'user/filteredUser',
  (userData: UsersType, thunkAPI) => {
    try {
      return userData;
    } catch (error: any) {
      const message = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk('user/logout', () => {
  localStorage.removeItem('authUser');
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.authUser = null;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.users = null;
      })
      .addCase(filterByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredUser = action.payload;
      })
      .addCase(filterByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.filteredUser = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authUser = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.authUser = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
