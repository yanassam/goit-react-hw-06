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
import { setSearchContact, selectFilter } from "./redux/filtersSlice";

// const base = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  // const [contacts, setContacts] = useLocalStorage("contacts", base);

  // const [searchContact, setSearchContact] = useState("");

  // const handleDeleteContact = (id) => {
  //   setContacts((prev) => prev.filter((contact) => contact.id !== id));
  // };

  // const getFilterData = () => {
  //   return contacts.filter((contact) =>
  //     contact.name
  //       .toLocaleLowerCase()
  //       .includes(searchContact.toLocaleLowerCase())
  //   );
  // };
  // const handleAddContact = (data) => {
  //   const newContact = { ...data, id: nanoid() };
  //   setContacts((prev) => [...prev, newContact]);
  // };

  // const filterContacts = getFilterData();
  // *********
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleAddContact = (contact) => {
    const newContact = { ...contact, id: nanoid() };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearchContact = (name) => {
    dispatch(setSearchContact(name));
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="wrap">
        <div>
          <ContactForm handleAddContact={handleAddContact} />
          <SearchBox setSearchContact={handleSearchContact} />
        </div>
        <ContactList
          contacts={filterContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
