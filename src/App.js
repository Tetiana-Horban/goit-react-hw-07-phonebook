import React, { useState } from 'react';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import { AppWrapper, Title } from './App.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';

const App = () => {
  const [filter, setFilter] = useState('');
  const { data: contacts } = useFetchContactsQuery();

  const handleChangeFilter = event => {
    setFilter(event.target.value);
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter onChange={handleChangeFilter} />
      <ContactsList />
    </AppWrapper>
  );
};
export default App;
