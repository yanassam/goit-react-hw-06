import { createSlice } from "@reduxjs/toolkit";

// это начал состояние
// const initialState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };

const initialState = { items: [] };

// создаю слайс для контакта
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
      // return {
      //   ...state,
      //   contacts: state.contacts.items.filter(
      //     (contact) => contact.id !== action.payload.id
      //   ),
      // };
    },
    // setFilters: (state, action) => {
    //   state.filters.name = action.payload;
    // },
  },
});

//генератор actions
export const { addContact, deleteContact } = contactsSlice.reducer;

// Селекторы
export const selectContacts = (state) => state.contacts.items;

// reducer слайсу
export const contactsReduser = contactsSlice.reducer;
