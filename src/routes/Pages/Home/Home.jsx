import { NavLink } from 'react-router-dom';
import { useLogOutRedirect } from '@/hooks/useLogOuteRedirect';
import { useGetState } from '@/redux/useGetState';
import style from './Home.module.css';

const Home = () => {
  const { isLoggedIn } = useGetState();

  useLogOutRedirect();

  return (
    <main className={style.main}>
      {isLoggedIn ? (
        <div>
          <h1>This phone book knows everything about your contacts</h1>
        </div>
      ) : (
        <div className={style.authorizationBox}>
          <NavLink to="/login">
            <button className={style.authorizationButton}>Log in</button>
          </NavLink>

          <NavLink to="/register">
            <button className={style.authorizationButton}>Sign up</button>
          </NavLink>
        </div>
      )}
    </main>
  );
};

export default Home;
