import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInitialStateTypes } from '../../@types';

const user: string = JSON.parse(localStorage.getItem('authUser')!);

const initialState: userInitialStateTypes = {
  user: user ? user : null,
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
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
