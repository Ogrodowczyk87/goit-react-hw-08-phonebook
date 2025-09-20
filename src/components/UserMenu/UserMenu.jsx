import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

const LogoutIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16,17 21,12 16,7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const getInitials = (email) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className={css.wrapper}>
      <div className={css.userInfo}>
        <div className={css.avatar}>
          {getInitials(user.email)}
        </div>
        <div className={css.userDetails}>
          <span className={css.username}>
            {user.name || 'User'}
          </span>
          <span className={css.userEmail}>
            {user.email}
          </span>
        </div>
      </div>
      <button
        type="button"
        className={css.logoutButton}
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon />
        Logout
      </button>
    </div>
  );
};
