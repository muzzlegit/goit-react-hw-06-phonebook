import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
//SELECTORS
import { getContactsList } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
//COMPONENTS
import ContactItem from 'components/ContactItem/ContactItem';
//STYLE
import { List, Item } from './ContactList.styled';

export default function ContactList() {
  const contacstList = useSelector(getContactsList);
  console.log('🚀 ~ contacstList:', contacstList);

  const filter = useSelector(getFilter);
  const [visibleContacts, setVisibleContacts] = useState(contacstList);

  useEffect(() => {
    const visibleContact = contacstList.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    setVisibleContacts(visibleContact);
  }, [contacstList, filter]);

  return (
    <List>
      {!visibleContacts.length ? (
        <Item color="black">
          s
          {contacstList.length
            ? 'В тебе немає такого контакту'
            : 'Здається, в тебе немає жодного знайомого :('}
        </Item>
      ) : null}
      {visibleContacts.map((contact, index) => {
        return <ContactItem key={index} contact={contact} index={index} />;
      })}
    </List>
  );
}
