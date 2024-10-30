import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';

const ContactForm=() =>{
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum number of characters is 3')
      .max(50, 'Maximum number of characters is 50')
      .required('This field is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format 000-00-00")
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    toast.success(`${newContact.name} has been added!`);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor="name">Name</label>
        <Field className={s.input} id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className={s.error} />

        <label className={s.label} htmlFor="number">Number</label>
        <Field className={s.input} id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" className={s.error} />

        <button type="submit" className={s.button}>Add contact</button>
      </Form>
    </Formik>
  );
}


export default ContactForm;
