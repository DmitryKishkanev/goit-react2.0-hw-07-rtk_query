import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useGetContactsQuery } from '@/redux/contactsApi';
import { filterContacts } from '@/redux/filter';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ filter }) => {
  const { data: contacts } = useGetContactsQuery();
  const filteredContacts = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter],
  );

  return (
    <ul className={style.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactList;
