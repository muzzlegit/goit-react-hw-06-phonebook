import { useState, useEffect } from 'react';
//COMPONENTS
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
//STYLES
import { Section, Container, Content, Title } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts') ?? []);
  });
  const [filter, setFilter] = useState('');
  const [visibleContacts, setVisibleContacts] = useState(contacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    const visibleContact = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    setVisibleContacts(visibleContact);
  }, [contacts, filter]);

  const addContact = contact => {
    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert('В тебе вже є такий контакт!');
      return;
    }
    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Section>
      <Container>
        <Content>
          <Title> Книга контактів</Title>
          <ContactForm addContact={addContact} />
          <Filter filter={filter} onFilterChange={setFilter} />
          <ContactList
            isContacts={contacts.length}
            contacstList={visibleContacts}
            deleteContact={deleteContact}
          />
        </Content>
      </Container>
    </Section>
  );
}
