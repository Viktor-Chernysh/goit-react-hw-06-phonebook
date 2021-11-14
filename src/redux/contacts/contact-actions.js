import * as counterTypes from './counter-types';

export const addNewContact = contact => ({
  type: counterTypes.GET_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: counterTypes.DELETE_CONTACT,
  payload: id,
});

export const addFilter = value => ({
  type: counterTypes.GET_FILTER,
  payload: value,
});
