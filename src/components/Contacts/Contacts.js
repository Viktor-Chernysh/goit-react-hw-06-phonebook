import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './Contacts.module.css';
import { deleteContact } from '../../redux/contacts/contact-actions';
function Contacts({ contacts, filter, onDelete }) {
  const filteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <ol className={s.contact_list}>
      {filteredContacts().map(({ id, name, number }) => (
        <li className={s.contact_item} key={id}>
          {name}:<span>{number}</span>{' '}
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch(deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
