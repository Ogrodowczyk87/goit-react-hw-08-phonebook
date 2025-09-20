import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

// SVG Icons as components
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

const AlertIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const LoginIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10,17 15,12 10,7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
);

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    setError('');
    setIsLoading(true);

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      form.reset();
    } catch (err) {
      setError(`Authentication failed: ${err}`);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={css.title}>Welcome Back</h1>
        <p className={css.subtitle}>Sign in to your account to continue</p>

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
              placeholder="Enter your password"
              required
            />
          </div>
        </label>

        {error && (
          <div className={css.error}>
            <AlertIcon />
            {error}
          </div>
        )}

        <button type="submit" className={css.submitButton} disabled={isLoading}>
          {isLoading ? (
            <>
              <div className={css.loadingSpinner}></div>
              Signing in...
            </>
          ) : (
            <>
              <LoginIcon />
              Sign In
            </>
          )}
        </button>
      </form>
    </div>
  );
};
