import React from 'react'
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  Label,
  Span,
  Input,
  Button,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
const {
  register,
  handleSubmit,
    formState: { errors },
    reset,
} = useForm();

    const onSubmitHandler = data => {
      onSubmit(data);
      reset(); 
    };
 
  return (
    <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
      <Label>
        <Span>Name:</Span>
        <Input {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </Label>
      <Label>
        <Span>Number:</Span>
        <Input {...register('number', { required: true })} type="text" />
        {errors.number && <span>This field is required</span>}
      </Label>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
}

export default ContactForm