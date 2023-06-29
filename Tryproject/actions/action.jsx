// actions.js

import { GET_USER } from './actionTypes';

export const getUser = user => ({
  type: GET_USER,
  payload: user,
});
