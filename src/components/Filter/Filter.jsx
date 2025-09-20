import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelector';

const SearchIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
);

const XIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleClearFilter = () => {
    dispatch(setFilter(''));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        <SearchIcon />
        Find Contacts by Name
      </label>
      <div className={css.inputWrapper}>
        <SearchIcon className={css.inputIcon} />
        <input
          className={css.input}
          type="text"
          name="filter"
          placeholder="Search contacts..."
          value={filter}
          onChange={handleFilterChange}
        />
        {filter && (
          <button
            type="button"
            className={css.clearButton}
            onClick={handleClearFilter}
            title="Clear search"
          >
            <XIcon />
          </button>
        )}
      </div>
    </div>
  );
};
