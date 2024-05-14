import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useLocalStorage } from "./hooks/useLocalStorage";
// ********

const base = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", base);

  const [searchContact, setSearchContact] = useState("");

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const getFilterData = () => {
    return contacts.filter((contact) =>
      contact.name
        .toLocaleLowerCase()
        .includes(searchContact.toLocaleLowerCase())
    );
  };
  const handleAddContact = (data) => {
    const newContact = { ...data, id: nanoid() };
    setContacts((prev) => [...prev, newContact]);
  };

  const filterContacts = getFilterData();
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="wrap">
        <div>
          <ContactForm handleAddContact={handleAddContact} />
          <SearchBox setSearchContact={setSearchContact} />
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
