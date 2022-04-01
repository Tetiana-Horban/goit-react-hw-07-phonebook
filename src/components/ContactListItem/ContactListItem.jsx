import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
import Button from './ContactList.styled';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
