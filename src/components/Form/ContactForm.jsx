import { CurrentForm, Input, Button, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { ErrorMessage } from '@hookform/error-message';

const ContactForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const stateContacts = useSelector(selectContacts);

  const onSubmitForm = contactInfo => {
    const duplicateName = stateContacts.find(
      contact => contact.name === contactInfo.name
    );
    duplicateName
      ? alert(contactInfo.name + ' is already in your contacts')
      : dispatch(addContact(contactInfo));
    reset({
      name: '',
      number: '',
    });
  };

  return (
    <CurrentForm onSubmit={handleSubmit(onSubmitForm)}>
      <Label>
        Name
        <Input
          type="text"
          {...register('name', {
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                "Name may contain only letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
          })}
          id="name"
          placeholder="For example Jacob Mercer"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => Notify.failure(`${message}`)}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          {...register('number', {
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message:
                'Phone number must be only digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
          id="number"
          placeholder="Starts with '+'"
          required
        />
        <ErrorMessage
          errors={errors}
          name="number"
          render={({ message }) => Notify.warning(`${message}`)}
        />
      </Label>
      <Button type="submit">
        Add to contact <BsFillTelephonePlusFill size="10px" />
      </Button>
    </CurrentForm>
  );
};
export default ContactForm;
