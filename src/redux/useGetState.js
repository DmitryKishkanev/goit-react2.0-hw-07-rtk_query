import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from './selectors';

export const useGetState = () => {
  return {
    userName: useSelector(selectUserName),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
