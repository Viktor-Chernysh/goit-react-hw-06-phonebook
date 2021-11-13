export const addNewContact = contact => ({
  type: 'contact/getContact',
  payload: contact,
});

export const deleteContact = id => ({
  type: 'contact/deleteContact',
  payload: id,
});

export const addFilter = value => ({
  type: 'contact/getFilter',
  payload: value,
});
