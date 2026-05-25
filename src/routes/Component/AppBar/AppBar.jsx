import { Link } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import style from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useGetState();

  return (
    <header className={style.header}>
      <div className={style.appBarContainer}>
        <Link className={style.headerLink} to="/">
          <h1 className={style.headerTitle}>Ponebook</h1>
        </Link>
        <Navigation />
      </div>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
