import { useGetContactsQuery } from 'redux/Helpers';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Box } from 'components/box';
import { Section } from 'components/Section/Section';

export function App() {
  const { data: contacts, isLoading } = useGetContactsQuery();  
  return (
    <Box  display="flex" flexDirection="column" alignItems="center">
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <b>Request in progress...</b>}
        {contacts?.length > 0 && (
          <>
            <Filter />
            
            <ContactList />
          </>
        )}
      </Section>
    </Box>
  );
}