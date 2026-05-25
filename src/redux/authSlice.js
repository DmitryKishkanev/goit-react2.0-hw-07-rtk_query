import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';
import { register, logIn, logOut, refreshCurrentUser } from './contactsOps';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  extraReducers: builder => {
    builder
      .addCase(register.pending, state => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => state)

      .addCase(logIn.pending, state => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => state)

      .addCase(logOut.pending, state => state)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => state)

      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
