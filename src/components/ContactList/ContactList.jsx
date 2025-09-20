import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectError, selectIsLoading } from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';
import css from './ContactList.module.css';

const ContactsIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EmptyContactsIcon = () => (
  <svg className={css.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M12 11h4"></path>
    <path d="M12 16h4"></path>
    <path d="M8 11h.01"></path>
    <path d="M8 16h.01"></path>
  </svg>
);

const AlertTriangleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading && !error) {
    return (
      <div className={css.loadingContainer}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={css.errorState}>
        <h3 className={css.errorTitle}>
          <AlertTriangleIcon />
          Error Loading Contacts
        </h3>
        <p className={css.errorDescription}>
          We couldn't load your contacts. Please check your connection and try again.
        </p>
      </div>
    );
  }

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>
          <ContactsIcon />
          Your Contacts
        </h2>
        {filteredContacts.length > 0 && (
          <span className={css.count}>
            {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {filteredContacts.length === 0 ? (
        <div className={css.emptyState}>
          <EmptyContactsIcon />
          <h3 className={css.emptyTitle}>No contacts found</h3>
          <p className={css.emptyDescription}>
            Your phonebook is empty. Start by adding your first contact using the form above.
          </p>
        </div>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(filteredContact => (
            <ContactListItem
              key={filteredContact.id}
              filteredContact={filteredContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
