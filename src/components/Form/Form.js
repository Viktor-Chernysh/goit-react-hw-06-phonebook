import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './Form.module.css';
import * as actions from '../../redux/contacts/contact-actions';

const nameInputId = uuidv4();
const numberInputId = uuidv4();

function Form({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const contactObject = {
      id: uuidv4(),
      name,
      number,
    };
    onAddContact(contactObject);
    resetForm();
  };

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  }

  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        id={nameInputId}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleChange}
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        className={s.input}
        id={numberInputId}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={handleChange}
        required
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
// Form.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: value => dispatch(actions.addNewContact(value)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
