import endpoints from 'constants/endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: builder => ({
    movieDetail: builder.query({
      query: id => ({
        url: `${endpoints.movieDetail}/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
    imageMovieDetail: builder.query({
      query: id => ({
        url: `${endpoints.movieDetail}/${id}${endpoints.imageDetail}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
    movieFetch: builder.query({
      query: endpoint => {
        return { url: `${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`, method: 'GET' };
      },
    }),
  }),
});

export const { useMovieDetailQuery, useImageMovieDetailQuery, useLazyMovieFetchQuery } = api;
