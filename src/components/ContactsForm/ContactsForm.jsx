import { Formik } from 'formik';
import { Form, Field, ErrorMessage, Button } from './ContactsForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(3, 'At least 3').required('Required'),
});

export const ContactsForm = ({ onAdd }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, actions) => {
      onAdd(values);
      actions.resetForm();
    }}
  >
    <Form>
      <label>Name</label>
      <Field type="text" name="name" />
      <ErrorMessage name="name" component="span" />
      <label>Number</label>
      <Field type="tel" name="number" />
      <ErrorMessage name="number" component="span" />
      <Button type="submit">Add contact</Button>
    </Form>
  </Formik>
);
