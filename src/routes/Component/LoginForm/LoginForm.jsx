import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '@/redux/contactsOps';
import style from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // dispatch возвращает промис, а unwrap превращает его в обычный промис с payload
      await dispatch(logIn({ email, password })).unwrap();

      // если логин успешный, очищаем форму и переходим на главную
      setEmail('');
      setPassword('');
      // Можно не делать если есть приватные и публичные роуты
      navigate('/', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      setErrorMessage(error.message || 'Login failed');
    }
  };

  return (
    <div className={style.loginFormBox}>
      <h1 className={style.loginFormTitle}>Log In</h1>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <label className={style.loginFormLabel}>
          Email
          <input
            className={style.loginFormField}
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label className={style.loginFormLabel}>
          Password
          <input
            className={style.loginFormField}
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        {errorMessage && <p>{`${errorMessage} - try again`}</p>}

        <button
          className={style.loginFormButton}
          type="submit"
          disabled={!email || !password}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
