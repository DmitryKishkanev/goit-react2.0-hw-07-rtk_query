import { useId } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBox.module.css';

const SearchBox = ({ value, onChangeFilter }) => {
  const fieldNameId = useId();

  const handleChange = e => {
    onChangeFilter(e.currentTarget.value);
  };

  return (
    <div className={style.searchBox}>
      <label htmlFor={fieldNameId} className={style.label}>
        Find contacts by name
      </label>
      <input
        className={style.field}
        type="text"
        value={value}
        id={fieldNameId}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default SearchBox;
