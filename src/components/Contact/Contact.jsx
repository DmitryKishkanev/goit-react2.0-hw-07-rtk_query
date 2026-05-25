import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import { useDeleteContactMutation } from '@/redux/contactsApi';
import PropTypes from 'prop-types';
import style from './Contact.module.css';

const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDeleteContact = contactId => {
    deleteContact(contactId);
  };

  return (
    <>
      <li className={style.contactItem} key={id}>
        <div className={style.contactBox}>
          <p className={style.contactContent}>
            <BiSolidUser />
            {name}:
          </p>
          <p className={style.contactContent}>
            <BiSolidPhone />
            {phone}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            handleDeleteContact(id);
          }}
          disabled={isDeleting}
        >
          {isDeleting && '🗑'} Delete
        </button>
      </li>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
