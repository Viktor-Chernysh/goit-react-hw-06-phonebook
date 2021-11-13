import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import s from './Filter.module.css';
import { addFilter } from '../../redux/contacts/actions';

function Filter({ onAddFilter }) {
  const inputId = uuidv4();
  const addFilter = e => {
    onAddFilter(e.target.value.trim());
  };
  return (
    <label className={s.filter}>
      <div>Find contact by name</div>
      <input type="text" id={inputId} name="filter" onChange={addFilter} />
    </label>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFilter: value => dispatch(addFilter(value)),
  };
};
export default connect(null, mapDispatchToProps)(Filter);
