import { createSlice } from '@reduxjs/toolkit';
import { userLogIn, userSignUp } from './userOperations';
import {
  userHandleLogIn,
  userHandleLogInRejected,
  userHandleSignUpFulfilled,
  userHandleSignUpRejected,
} from './handleFunctions';
import userInitialState from './userInitialState';

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(userSignUp.fulfilled, userHandleSignUpFulfilled)
      .addCase(userSignUp.rejected, userHandleSignUpRejected)
      .addCase(userLogIn.fulfilled, userHandleLogIn)
      .addCase(userLogIn.rejected, userHandleLogInRejected);
  },
});

export const userReducer = userSlice.reducer;
