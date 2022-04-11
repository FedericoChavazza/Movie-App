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
    imdbDetails: builder.query({
      query: imdbId => {
        console.log(imdbId);
        return { url: `${endpoints.title}/${imdbId}`, method: 'GET' };
      },
    }),
  }),
});

export const {
  useLazyDiscoveryQuery,
  useLazyTrendingQuery,
  useLazyTopRatedQuery,
  useMovieDetailQuery,
  useImageMovieDetailQuery,
  useImdbDetailsQuery,
} = api;
