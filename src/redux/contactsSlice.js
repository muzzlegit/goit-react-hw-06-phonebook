import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [] },
  reducers: {
    addContact(state, action) {
      if (
        state.list.find(
          item => item.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert('В тебе вже є такий контакт!');
        return;
      }
      state.list = [...state.list, action.payload];
    },
    deleteContact(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
  },
});

//persist setup
const persistConfig = {
  key: 'list',
  storage,
};
const persistedСontactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
//Actions
export const { addContact, deleteContact } = contactsSlice.actions;
//Reducer
export const contactsReducer = persistedСontactsReducer;
//Selectors
export const getContactsList = state => state.contacts.list;
