import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

// SVG Icons as components
const UserIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const EmailIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const UserPlusIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={css.title}>Create Account</h1>
        <p className={css.subtitle}>Join us to start managing your contacts</p>

        <label className={css.label}>
          <span className={css.labelText}>
            <UserIcon />
            Full Name
          </span>
          <div className={css.inputWrapper}>
            <UserIcon className={css.inputIcon} />
            <input
              type="text"
              name="name"
              className={css.input}
              placeholder="Enter your full name"
              required
            />
          </div>
        </label>

        <label className={css.label}>
          <span className={css.labelText}>
            <EmailIcon />
            Email Address
          </span>
          <div className={css.inputWrapper}>
            <EmailIcon className={css.inputIcon} />
            <input
              type="email"
              name="email"
              className={css.input}
              placeholder="Enter your email"
              required
            />
          </div>
        </label>

        <label className={css.label}>
          <span className={css.labelText}>
            <LockIcon />
            Password
          </span>
          <div className={css.inputWrapper}>
            <LockIcon className={css.inputIcon} />
            <input
              type="password"
              name="password"
              className={css.input}
              placeholder="Create a password"
              required
            />
          </div>
        </label>

        <button type="submit" className={css.submitButton}>
          <UserPlusIcon />
          Create Account
        </button>
      </form>
    </div>
  );
};
