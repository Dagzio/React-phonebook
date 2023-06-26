import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const userSignUp = createAsyncThunk('users/signup', async userData => {
const response = await axios.post(`${BASE_URL}/users/signup`, userData);
console.log(response)
  return response
})

export const userLogIn =createAsyncThunk('users/login', async userData=> {
  const {data} = await axios.post(`${BASE_URL}/users/login`, userData);
  return data;
})
