import endpoints from 'constants/endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: builder => ({
    discovery: builder.query({
      query: () => ({
        url: `${endpoints.discover}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
    trending: builder.query({
      query: () => ({
        url: `${endpoints.trending}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
    topRated: builder.query({
      query: () => ({
        url: `${endpoints.top_rated}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLazyDiscoveryQuery,
  useLazyTrendingQuery,
  useLazyTopRatedQuery,

  endpoints: {
    discovery: { matchFulfilled: discoveryFulfilled },
    trending: { matchFulfilled: trendingFulfilled },
    topRated: { matchFulfilled: topRatedFulfilled },
  },
} = api;
