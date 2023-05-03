import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
//ACTIONS
import { deleteContact } from 'redux/contactsSlice';
//ICONS
import { AiOutlineScissor } from 'react-icons/ai';
//STYLE
import { Item, Button } from './ContactItem.styled';

export default function ContactItem({ contact, index }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <Item key={id} id={id}>
      <p>
        {index + 1}. {name} - {number}
      </p>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <AiOutlineScissor size="24px" />
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
