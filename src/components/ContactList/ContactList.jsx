import s from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  if (!contacts.length) {
    return <h1 className={s.title}> No contacts</h1>;
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
