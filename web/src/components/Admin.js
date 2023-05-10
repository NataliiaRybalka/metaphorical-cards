import { useState, useEffect } from 'react';

import { AdminPanel } from './AdminPanel';
import { AdminLogin } from './AdminLogin';

import './components.css';

export const Admin = () => {
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    setSavedUser(localStorage.getItem('email'))
  }, []);

  return (
    <>
      {!savedUser 
        ? <AdminLogin />
        : <AdminPanel />
      }
    </>
  )
};
