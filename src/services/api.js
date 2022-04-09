import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: builder => ({
    movieFetch: builder.query({
      query: endpoint => {
        return { url: `${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`, method: 'GET' };
      },
    }),
  }),
});

export const { useLazyMovieFetchQuery } = api;
