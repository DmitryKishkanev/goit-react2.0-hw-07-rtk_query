import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://68dfdefa93207c4b4793043b.mockapi.io',
  }),
  // Для обновления отображения контента
  tagTypes: ['Contact'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => `/contacts`,
      // Для обновления отображения контента
      providesTags: ['Contact'],
    }),

    createContact: build.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      // Для обновления отображения контента
      invalidatesTags: ['Contact'],
    }),

    deleteContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      // Для обновления отображения контента
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
