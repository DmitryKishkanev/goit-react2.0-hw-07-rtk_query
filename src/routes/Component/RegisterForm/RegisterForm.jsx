import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '@/redux/contactsOps';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // dispatch возвращает промис, а unwrap превращает его в обычный промис с payload
      await dispatch(register({ name, email, password })).unwrap();

      // если регистрация успешна, очищаем форму и переходим на главную
      setName('');
      setEmail('');
      setPassword('');
      navigate('/', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      setErrorMessage(error.message || 'Register failed');
    }
  };

  return (
    <div className={style.registerFormBox}>
      <h1 className={style.registerFormTitle}>Registration</h1>
      <form className={style.registerForm} onSubmit={handleSubmit}>
        <label className={style.registerFormLabel}>
          Name
          <input
            className={style.registerFormField}
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label className={style.registerFormLabel}>
          Email
          <input
            className={style.registerFormField}
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label className={style.registerFormLabel}>
          Password
          <input
            className={style.registerFormField}
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        {errorMessage && <p>{`${errorMessage} - try again`}</p>}

        <button
          className={style.registerFormButton}
          type="submit"
          disabled={!name || !email || !password}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
