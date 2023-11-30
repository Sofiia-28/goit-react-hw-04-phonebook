import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  gap: 8px;
  padding-bottom: 8px;
`;

export const Button = styled('button')`
  background-color: white;
  border-radius: 3px;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #ecdfdf;
  }
`;
