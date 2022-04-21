import { GUEST_SESSION, WATCHLIST } from 'constants/constants';

export const setGuestSession = id => {
  return localStorage.setItem(GUEST_SESSION, id);
};
export const getGuestSession = () => localStorage.getItem(GUEST_SESSION) ?? '';

export const setWatchlist = array => {
  return localStorage.setItem(WATCHLIST, JSON.stringify(array));
};
export const getWatchlist = () => JSON.parse(localStorage.getItem(WATCHLIST) ?? '[]');
