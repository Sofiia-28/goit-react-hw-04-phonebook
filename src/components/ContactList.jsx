import { Wrapper, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Wrapper key={id}>
            <li>
              {name}: {number}
            </li>
            <Button onClick={() => onDelete(id)} type="button">
              Delete
            </Button>
          </Wrapper>
        );
      })}
    </ul>
  );
};
