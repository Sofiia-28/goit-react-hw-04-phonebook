import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  max-width: 350px;
  border: 1px solid black;
`;

export const Field = styled(FormikField)`
  max-width: 200px;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 12px;
  color: grey;
`;

export const Button = styled('button')`
  max-width: 100px;
  margin-top: 20px;

  background-color: white;
  border-radius: 3px;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #ecdfdf;
  }
`;
