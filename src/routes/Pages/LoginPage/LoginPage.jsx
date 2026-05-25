import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/routes/Component/LoginForm';
import style from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      navigate('/', { replace: true });
    }
  };

  // оборачиваем handleKeyDown в useCallback(), что бы ниже в useEffect можно было handleKeyDown спокойно поставить в зависимости, что бы эффект постоянно не отписывал/подписывал слушатель заново
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        navigate('/', { replace: true });
      }
    },
    [navigate],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // Не ставим handleKeyDown в зависимости useEffect,
    // потому что функция пересоздаётся на каждом рендере,
    // и эффект будет постоянно отписывать/подписывать слушатель заново.
    // Нам нужен один слушатель при монтировании, поэтому оставляем [].
  }, [handleKeyDown]);

  return (
    <div className={style.loginPageContainer} onClick={handleBackdropClick}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
