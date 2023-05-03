//COMPONENTS
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

//STYLES
import { Section, Container, Content, Title } from './App.styled';

export default function App() {
  return (
    <Section>
      <Container>
        <Content>
          <Title> Книга контактів</Title>
          <ContactForm />
          <Filter />
          <ContactList />
        </Content>
      </Container>
    </Section>
  );
}
