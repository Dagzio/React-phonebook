import ContactForm from '../../components/Form/ContactForm';
import Container from '../../components/App/App.styled';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations';
import { ThreeDots } from 'react-loader-spinner';

const ContactsPage = () => {
  const stateIsLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {stateIsLoading ? (
        <ThreeDots
          height="70"
          width="70"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
    </Container>
  );
};
export default ContactsPage;
