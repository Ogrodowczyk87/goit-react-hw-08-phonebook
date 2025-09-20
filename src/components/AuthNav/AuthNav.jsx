import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const UserPlusIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const LoginIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10,17 15,12 10,7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
);

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/login"
        className={`${css.link} ${css.loginLink}`}
      >
        <LoginIcon />
        Sign In
      </NavLink>
      <NavLink
        to="/register"
        className={`${css.link} ${css.registerLink}`}
      >
        <UserPlusIcon />
        Sign Up
      </NavLink>
    </nav>
  );
};
