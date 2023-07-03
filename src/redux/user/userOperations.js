import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
}

const LogIn = async userData => {
  const response = await axios.post('users/login', userData);
  setToken(response.data.token);
  return response;
};

export const userSignUp = createAsyncThunk('users/signup', async userData => {
 const response = await axios.post('users/signup', userData);
 setToken(response.data.token);
  return response.data;
});

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get('users/current');
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
  
  const result = await axios.post('users/logout');
  clearToken();
  return result;
});

