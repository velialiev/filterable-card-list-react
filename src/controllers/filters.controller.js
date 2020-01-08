import { API_URLS } from '../constants/API_URLS.constant';

export const getFilters = () => {
  return fetch(API_URLS.GET_FILTERS);
};
