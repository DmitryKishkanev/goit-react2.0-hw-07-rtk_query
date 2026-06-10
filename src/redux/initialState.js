// import initialContact from '@/contacts.json';

export const initialState = {
  auth: {
    user: { name: null, email: null },
    token: null,
    // isLoggedIn: !!localStorage.getItem('token'),
    isLoggedIn: null,
    isRefreshing: false,
  },
};
