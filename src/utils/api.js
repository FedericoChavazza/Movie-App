import { GUEST_SESSION } from 'constants/constants';

export const setGuestSession = id => {
  return localStorage.setItem(GUEST_SESSION, id);
};
export const getGuestSession = () => localStorage.getItem(GUEST_SESSION) ?? '';
