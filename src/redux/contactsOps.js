import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { privateApiConnections, set, unset } from './apiConnections';

axios.defaults.baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await privateApiConnections.post(
        '/users/signup',
        credentials,
      );
      // Запись token для всех последующих операций
      set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await privateApiConnections.post(
        '/users/login',
        credentials,
      );
      // Запись token для всех последующих операций
      set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (__, thunkAPI) => {
  try {
    await privateApiConnections.post('/users/logout');
    // Очищаем token после logOut
    unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.massage);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (__, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    set(persistedToken);
    try {
      const { data } = await privateApiConnections.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  },
);
