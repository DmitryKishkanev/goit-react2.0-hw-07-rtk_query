import { NavLink } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';
import style from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useGetState();

  return (
    <>
      <ul className={style.headerList}>
        <li className={style.headerItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${style.headerLink} ${style.active}`
                : style.headerLink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={style.headerItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${style.headerLink} ${style.active}`
                  : style.headerLink
              }
              to="phonebook"
            >
              Phonebook
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navigation;
