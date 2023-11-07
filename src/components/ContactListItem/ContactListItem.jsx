import { ListItem, DeleteButton } from './ContactListItem.styled';

const ContactListItem = ({ id, contact, number, onDeleteContact }) => {
  return (
    <ListItem>
      {contact}: {number}
      <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
    </ListItem>
  );
};

export default ContactListItem;
