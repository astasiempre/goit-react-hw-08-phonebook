import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from 'redux/contactsReducer';
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
  const error = useSelector(selectContactsError);
  const filterTerm = useSelector(selectContactsFilterTerm);
  
  const onSubmit = (contact) => {
    dispatch(addContact(contact));
    reset();
  }
    
    
  return (
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
  );
}

export default ContactsPage