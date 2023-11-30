import { useState, useEffect } from 'react';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './App.styled';

const storageKey = 'contacts';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(storageKey);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return [];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newName => {
    const name = {
      ...newName,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, name]);
  };

  const searchFilter = name => {
    setFilter(name);
  };

  const deleteName = nameId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== nameId)
    );
  };

  const visibleNames = contacts.filter(contact => {
    const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm onAdd={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onSearch={searchFilter} />
      <ContactList contacts={visibleNames} onDelete={deleteName} />
    </Wrapper>
  );
};
