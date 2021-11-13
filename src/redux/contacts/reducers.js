import { combineReducers } from 'redux';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = initContacts, { type, payload }) => {
  switch (type) {
    case 'contact/getContact':
      const addedName = state
        .map(el => el.name.toLowerCase())
        .includes(payload.name.toLowerCase());
      const addedNumber = state.map(el => el.number).includes(payload.number);
      if (addedName && addedNumber) {
        alert(`${payload.name} is already in contacts!`);
        return state;
      }
      return [...state, payload];

    case 'contact/deleteContact':
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'contact/getFilter':
      return payload;
    default:
      return state;
  }
};
const contactReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const rootReducer = combineReducers({
  contacts: contactReducer,
});
