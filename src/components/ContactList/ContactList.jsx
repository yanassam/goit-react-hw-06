import s from "./ContactList.module.css";
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts.length) {
    return <h1 className={s.title}> No contacts</h1>;
  }
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
