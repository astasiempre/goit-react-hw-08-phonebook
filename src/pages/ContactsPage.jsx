import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deleteContact, fetchContacts } from 'redux/contactsReducer';
import { selectContacts, selectContactsError, selectContactsFilterTerm, selectContactsIsloading } from 'redux/contactsSelectors';

const ContactsPage = () => {
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsloading);
  // const error = useSelector(selectContactsError);
  // const filterTerm = useSelector(selectContactsFilterTerm);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = (contact) => {
    dispatch(addContact(contact));
    reset();
  }
    
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Name:</span>
        <input {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Number:</span>
        <input {...register('number', { required: true })} type="text" />
        {errors.number && <span>This field is required</span>}
      </label>

      <button type="submit">Add contact</button>
      {/* <label>
        <span>Password:</span>
        <input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label> */}

    </form>
{isLoading && <Loader />}
    <ul>
      {Array.isArray(contacts) && contacts.map(({ id, name, number }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>delete</button>
        </li>
      ))}
    </ul>
</>
  );
}

export default ContactsPage