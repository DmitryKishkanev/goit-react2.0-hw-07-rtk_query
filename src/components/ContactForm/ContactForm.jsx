import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from '@/redux/contactsApi';
import style from './ContactForm.module.css';

const FeedbackSchema = object().shape({
  name: string().min(3, 'Too Short!').max(50, 'Too Lonf!').required('Required'),
  phone: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Lonf!')
    .required('Required'),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = async (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };

    // contacts?.some(...) — безопасная проверка, если contacts ещё не загрузились
    const isNamePresent = contacts?.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      resetForm();
      return;
    }

    try {
      await createContact(newContact).unwrap();
      resetForm();
    } catch (error) {
      console.error('Ошибка при создании контакта:', error);
      alert('Не удалось добавить контакт');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.fieldBox}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={style.fieldBox}>
          <label className={style.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={style.field}
            type="tel"
            name="phone"
            id={numberFieldId}
          />
          <ErrorMessage
            className={style.errorMessage}
            name="phone"
            component="span"
          />
        </div>

        <button className={style.formButton} type="submit" disabled={isLoading}>
          {isLoading && '☎'} Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
