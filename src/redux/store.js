import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
