import ContactListItem from '../ContactListItem/ContactListItem';
import { List, Title } from './ContactList.styled';

const ContactList = ({ contacts, filterTerm, onDeleteContact }) => {

if (!contacts || !Array.isArray(contacts)) {
    return;
}

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterTerm.toLowerCase()));

  return (
    <>
    <Title>Contacts</Title>
    <List>
      {Array.isArray(filteredContacts) && filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
          id={contact.id}
        />
      ))}
    </List>
    </>
  );
};

export default ContactList;
