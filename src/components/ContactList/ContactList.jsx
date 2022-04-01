import { useFetchContactsQuery } from 'redux/contacts/contactApi';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { ContactWrapper, ContactItem } from './ContactList.styled';

const ContactsList = () => {
  const { data: contacts, isFetching, isError } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const getRenderContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ContactWrapper>
      {!isFetching &&
        !isError &&
        getRenderContacts().map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactListItem id={id} name={name} number={phone} />
          </ContactItem>
        ))}
    </ContactWrapper>
  );
};

export default ContactsList;
