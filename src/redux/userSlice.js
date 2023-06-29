import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, userLogIn, userSignUp } from './userOperations';
import {
  userHandleLogInFulfilled,
  userHandleLogInRejected,
  userHandleSignUpFulfilled,
  userHandleSignUpRejected,
  userHandleGetUserFulfilled,
} from './handleFunctions';
import userInitialState from './userInitialState';

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(userSignUp.fulfilled, userHandleSignUpFulfilled)
      .addCase(userSignUp.rejected, userHandleSignUpRejected)
      .addCase(userLogIn.fulfilled, userHandleLogInFulfilled)
      .addCase(userLogIn.rejected, userHandleLogInRejected)
      .addCase(getCurrentUser.fulfilled, userHandleGetUserFulfilled);
  },
});

export const userReducer = userSlice.reducer;
