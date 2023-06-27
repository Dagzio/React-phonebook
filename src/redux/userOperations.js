import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com/users';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token
}

export const userSignUp = createAsyncThunk('users/signup', async userData => {
  return await axios.post(`${BASE_URL}/signup`, userData);
});

export const userLogIn = createAsyncThunk('users/login', async userData => {
  const { data } = await axios.post(`${BASE_URL}/login`, userData);
  if ('token' in data) {
    setToken(`Bearer ${userData.token}`)};
  return data;
});

export const userLogOut = createAsyncThunk('users/logout', async userToken => {
  return await axios.post(`${BASE_URL}/logout`)
})


// СДЕЛАТЬ ЗАПРОС НА CURRENT USER ПОСЛЕ ЛОГИНА ( ЭТО ДЛЯ ВЫВОДА ИМЕНИ HELLO, LOGOUT)