import { useState } from 'react';
import ContactList from '../ContactList';
import SearchBox from '../SearchBox';
import ContactForm from '../ContactForm';
import style from './Phonebook.module.css';

const Phonebook = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className={style.phonebookContainer}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChangeFilter={setFilter} />
      <ContactList filter={filter} />
    </div>
  );
};

export default Phonebook;
