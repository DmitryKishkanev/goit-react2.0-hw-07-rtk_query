import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { logOut } from '@/redux/contactsOps';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useGetState();

  return (
    <div className={style.userMenuBox}>
      <p className={style.userMenuText}>Hi, {userName}</p>
      <button
        className={style.userMenuButton}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
