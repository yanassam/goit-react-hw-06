import s from "./Contact.module.css";

import { IoCallSharp } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.form} key={contact.id}>
      <div className={s.contact}>
        <div className={s.name}>
          <IoAccessibility />
          {contact.name}
        </div>
        <div className={s.number}>
          <IoCallSharp />
          {contact.number}
        </div>
      </div>
      <div>
        <button
          className={s.buttonDel}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
