import endpoints from 'constants/endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ImdbApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_IMDB_ID_URL }),
  reducerPath: 'ImdbApi',
  endpoints: builder => ({
    imdbRating: builder.query({
      query: movieImdbId => ({
        url: `${endpoints.imdb_title}/${process.env.REACT_APP_IMDB_ID}/${movieImdbId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useImdbRatingQuery } = ImdbApi;
