import { WATCHLIST } from 'constants/constants';

export const setWatchlist = array => {
  return localStorage.setItem(WATCHLIST, JSON.stringify(array));
};
export const getWatchlist = () => localStorage.getItem(WATCHLIST) ?? '[]';
