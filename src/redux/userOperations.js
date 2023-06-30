import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const LogIn = async userData => {
  const response = await instance.post('/login', userData);
  setToken(response.data.token);
  return response;
};

export const userSignUp = createAsyncThunk('users/signup', async userData => {
  return await instance.post('/signup', userData);
});

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await instance.get('/current');
      return response;
    } catch (error) {
      dispatch(userLogOut());
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'users/login',
  async (userData, { dispatch }) => {
    const { data } = await LogIn(userData);
    dispatch(getCurrentUser());

    return data;
  }
);

export const userLogOut = createAsyncThunk('users/logout', async () => {
  return await instance.post('/logout');
});

