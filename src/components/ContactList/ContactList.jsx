import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import ContactListItem from '../ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';
import { ContactWrapper, ContactItem } from './ContactList.styled';

const ContactsList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  console.log(contacts);
  return (
    <ContactWrapper>
      {!isFetching &&
        contacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactListItem id={id} name={name} number={phone} />
          </ContactItem>
        ))}
    </ContactWrapper>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
export default ContactsList;
