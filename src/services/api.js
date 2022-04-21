import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import endpoints from 'constants/endpoints';
import { getGuestSession } from 'utils/api';

const session = getGuestSession();

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: builder => ({
    movieFetch: builder.query({
      query: endpoint => {
        return { url: `${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`, method: 'GET' };
      },
    }),
    movieRate: builder.mutation({
      query: value => {
        return {
          url: `${endpoints.movie}/${value.movieId}${endpoints.rating}?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${value.session}`,
          method: 'POST',
          body: {
            value: value.rate,
          },
        };
      },
    }),
    guestSessionId: builder.query({
      query: () => ({
        url: `${endpoints.authentication_guest_session}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
    getUserRatedMovies: builder.query({
      query: () => ({
        url: `${endpoints.guest_session}/${session}${endpoints.ratedMovies}?api_key=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLazyMovieFetchQuery,
  useMovieRateMutation,
  useGuestSessionIdQuery,
  useGetUserRatedMoviesQuery,
} = api;
