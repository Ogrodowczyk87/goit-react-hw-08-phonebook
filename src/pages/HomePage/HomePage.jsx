import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './HomePage.module.css';

const PhonebookIcon = () => (
  <svg className={css.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className={css.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
);

const SecurityIcon = () => (
  <svg className={css.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook - Manage Your Contacts</title>
      </Helmet>
      <div className={css.container}>
        <div className={css.hero}>
          <h1 className={css.title}>Your Digital Phonebook</h1>
          <p className={css.subtitle}>
            Store, organize, and manage all your contacts in one secure place.
            Simple, fast, and always available when you need it.
          </p>
        </div>

        <div className={css.features}>
          <div className={css.feature}>
            <PhonebookIcon />
            <h3 className={css.featureTitle}>Easy Contact Management</h3>
            <p className={css.featureDescription}>
              Add, edit, and delete contacts with a simple, intuitive interface.
              Keep all your important contact information organized.
            </p>
          </div>

          <div className={css.feature}>
            <SearchIcon />
            <h3 className={css.featureTitle}>Quick Search</h3>
            <p className={css.featureDescription}>
              Find any contact instantly with our powerful search feature.
              Filter by name to locate contacts in seconds.
            </p>
          </div>

          <div className={css.feature}>
            <SecurityIcon />
            <h3 className={css.featureTitle}>Secure & Private</h3>
            <p className={css.featureDescription}>
              Your contacts are protected with secure authentication.
              Only you can access your personal contact information.
            </p>
          </div>
        </div>

        <div className={css.cta}>
          {isLoggedIn ? (
            <Link to="/contacts" className={css.ctaButton}>
              View Your Contacts
              <ArrowRightIcon />
            </Link>
          ) : (
            <Link to="/register" className={css.ctaButton}>
              Get Started Today
              <ArrowRightIcon />
            </Link>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
