import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from './selectors';
import { useSelector } from 'react-redux';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      console.log(response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const response = await instance.post('/contacts', contactData);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactData => {
    const response = await instance.delete(
      `/contacts/${contactData.id}`,
      contactData
    );
    return response.data;
  }
);
