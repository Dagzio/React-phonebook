import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import userSignUp from './userOperations';
import { userHandleSignUp } from './handleFunctions';

const userSlice = createSlice({
  name: 'user',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder.addCase(userSignUp.fulfilled, userHandleSignUp);
  },
});

export const userReducer = userSlice.reducer;
