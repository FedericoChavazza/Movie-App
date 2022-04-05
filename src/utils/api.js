import { CATEGORIES } from 'constants/constants';

export const setCategories = category => localStorage.setItem(CATEGORIES, category);

export const getCategories = () => localStorage.getItem(CATEGORIES);
