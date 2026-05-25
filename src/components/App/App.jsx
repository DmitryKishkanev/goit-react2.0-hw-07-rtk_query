import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/routes/Component/Layout';
import NotFoundPage from '@/routes/Pages/NotFoundPage';
import { refreshCurrentUser } from '@/redux/contactsOps';
import { useGetState } from '@/redux/useGetState';
import style from './App.module.css';

const Home = lazy(() => import('@/routes/Pages/Home'));
const PhonebookDetails = lazy(() => import('@/routes/Pages/PhonebookDetails'));
const Description = lazy(() => import('@/routes/Component/Description'));
const LoginPage = lazy(() => import('@/routes/Pages/LoginPage'));
const RegisterPage = lazy(() => import('@/routes/Pages/RegisterPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useGetState();

  // При перезагрузке страницы возвращаем пользователя
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="phonebook" element={<PhonebookDetails />}>
              <Route path="description" element={<Description />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    )
  );
}
