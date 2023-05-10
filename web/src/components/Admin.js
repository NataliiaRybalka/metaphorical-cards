import { useState, useEffect } from 'react';

import { AdminLogin } from './AdminLogin';
import { AdminTabs } from './AdminTabs';

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
        : <AdminTabs />
      }
    </>
  )
};
