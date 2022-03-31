import endpoints from 'constants/endpoints';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: builder => ({
    discover: builder.query({
      query: () => ({
        url: `${endpoints.discover}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useDiscoverQuery } = api;
