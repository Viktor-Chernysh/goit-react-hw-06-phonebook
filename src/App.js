import './App.css';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';
// import useLocalStorage from './hooks/useLocaleStorage';
import { connect } from 'react-redux';
// import store from './redux/store';

// const contactsArr = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

function App({ contacts }) {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Form />
      </Section>
      {contacts.length > 0 && (
        <Section>
          <h2>Contacts</h2>
          <Filter />
          <Contacts />
        </Section>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
export default connect(mapStateToProps, null)(App);
