import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com/users/signup';

const userSignUp = createAsyncThunk('user/signUp', async userData => {
  const response = await axios.post(`${BASE_URL}`, userData);
  return response.data;
});

export default userSignUp;
