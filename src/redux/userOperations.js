import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

const LogIn = async userData => {
  const response = await instance.post('/login', userData);
  setToken(`Bearer ${response.data.token}`);
  return response;
};

export const userSignUp = createAsyncThunk('users/signup', async userData => {
  return await instance.post('/signup', userData);
});

export const getCurrentUser = createAsyncThunk('users/current', async () => {
  const response = await instance.get('/current');
  return response;
});

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

// СДЕЛАТЬ ЗАПРОС НА CURRENT USER ПОСЛЕ ЛОГИНА ( ЭТО ДЛЯ ВЫВОДА ИМЕНИ HELLO, LOGOUT)
