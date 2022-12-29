import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Helpers';
import { useSelector } from 'react-redux';
import * as contactsSelectors from 'redux/contacts/selectors';
import { Img, List } from './ContactList.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Box } from '../box';


export function ContactList() {
  const [deleteContact] = useDeleteContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(contactsSelectors.selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box border="1px solid black" p={2} borderRadius="8px">
      <Box as="ul" >
        {filteredContacts.map((contact, index) => (
          <Box  mb={1} width="100%" >
            <List key={contact.id}>
              <Img src={contact.avatart} alt="contactPhoto"  />
              <p>{contact.name} {contact.phone}{' '}</p>
              <Button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </Button>
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
}