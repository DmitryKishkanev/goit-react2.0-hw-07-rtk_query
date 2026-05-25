import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>404 - Page Not Found</h1>
      <p className={style.text}>Такой страницы нет</p>
      <Link className={style.link} to={'/'}>
        Back to home
      </Link>
    </main>
  );
};

export default NotFoundPage;
