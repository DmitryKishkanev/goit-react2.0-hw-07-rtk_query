import { Suspense, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import BackLink from '@/routes/Component/BackLink';
import Phonebook from '@/components/Phonebook';
import { useLogOutRedirect } from '@/hooks/useLogOuteRedirect';
import style from './PhonebookDetails.module.css';

const PhonebookDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useLogOutRedirect();

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <main className={style.main}>
      <div className={style.backLinkBox}>
        {/* строчка для ESLint, что бы он не ругался на backLinkRef.current*/}
        {/* eslint-disable-next-line */}
        <BackLink to={backLinkRef.current}>Go back</BackLink>
      </div>

      <div className={style.phonebooDetailsContainer}>
        <Phonebook />

        <div className={style.descriptionBox}>
          <div className={style.linkBox}>
            <Link className={style.link} to="description">
              Description
            </Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default PhonebookDetails;
