import { useDispatch, useSelector } from 'react-redux';
import { ContactList, Button, Text, ContactName } from './Contacts.styled';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contactOperations';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Contacts = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContacts);
  const stateFilterValue = useSelector(selectFilterValue);
  const filteredContacts = stateContacts.filter(contact =>
    contact.name.toLowerCase().includes(stateFilterValue.toLowerCase())
  );

  return (
    <div>
      {stateContacts.length > 0 ? (
        <ContactList>
          {filteredContacts.map(contact => (
            <ContactName key={contact.id}>
              {contact.name} : {contact.number}
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(contact))}
              >
                <RiDeleteBack2Fill color="green" size="16px" />
              </Button>
            </ContactName>
          ))}
        </ContactList>
      ) : (
        <Text>There are no contacts in your phonebook yet.</Text>
      )}
    </div>
  );
};

export default Contacts;
