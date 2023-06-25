import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    contactsReducer,
  },
});