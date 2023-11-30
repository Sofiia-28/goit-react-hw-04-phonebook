import { Wrapper, Field } from './Filter.styled';

export const Filter = ({ filter, onSearch }) => {
  return (
    <Wrapper>
      <label>Find contacts by name</label>
      <Field
        type="search"
        value={filter}
        onChange={evt => onSearch(evt.target.value)}
      />
    </Wrapper>
  );
};
