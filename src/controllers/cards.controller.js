import { API_URLS } from '../constants/API_URLS.constant';

export const getCards = () => {
  return fetch(API_URLS.GET_CARDS)
};
