import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

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
      setError(`Błąd logowania: ${err}`);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" required />
      </label>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logowanie...' : 'Log In'}
      </button>
    </form>
  );
};
