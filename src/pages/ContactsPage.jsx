import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
  setFilterTerm,
} from 'redux/contactsReducer';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilterTerm,
  selectContactsIsloading,
} from 'redux/contactsSelectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsloading);
  const error = useSelector(selectContactsError);
  const filterTerm = useSelector(selectContactsFilterTerm);
  const { reset } = useForm();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = newContact => {


      const phoneBookHasContact = contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (phoneBookHasContact) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }

    dispatch(addContact(newContact));
    reset();
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = filterTerm => {
    dispatch(setFilterTerm(filterTerm));
  };
  return (
    <>
      <ContactForm onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <Filter filterTerm={filterTerm} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filterTerm={filterTerm}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default ContactsPage;
