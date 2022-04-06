import { CATEGORIES, WATCHLIST } from 'constants/constants';

export const setCategories = category => localStorage.setItem(CATEGORIES, category);

export const getCategories = () => localStorage.getItem(CATEGORIES);

export const setWatchlist = array => {
  return localStorage.setItem(WATCHLIST, JSON.stringify(array));
};
export const getWatchlist = () => localStorage.getItem(WATCHLIST);
