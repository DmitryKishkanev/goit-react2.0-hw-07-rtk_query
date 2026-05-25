import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useGetState();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};
