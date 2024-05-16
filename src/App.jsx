// import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useLocalStorage } from "./hooks/useLocalStorage";
// ********
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectNameFilter, changeFilter } from "./redux/filtersSlice";

function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(changeFilter);

  // const handleAddContact = (contact) => {
  //   const newContact = { ...contact, id: nanoid() };
  //   dispatch(addContact(newContact));
  // };

  // const handleDeleteContact = (id) => {
  //   dispatch(deleteContact(id));
  // };

  // const handleSearchContact = (name) => {
  //   dispatch(selectNameFilter(name));
  // };

  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="wrap">
        <div>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList
        // contacts={filterContacts}
        // onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
