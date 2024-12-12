import PropTypes from "prop-types";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteContact = (id) => {
    onDeleteContact(id);
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li className={styles.contactItem} key={contact.id}>
          <div className={styles.contactInfo}>
            <FaUser className={styles.contactIcon} />
            <div>
              <div className={styles.contactName}>{contact.name}</div>
              <div className={styles.contactIcons}>
                <FaPhoneAlt className={styles.phoneIcon} />{" "}
                <span className={styles.contactNumber}>{contact.number}</span>
              </div>
            </div>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
