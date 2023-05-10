import { useState } from 'react';
import axios from 'axios';

import { SERVER } from '../constants';

import './components.css';

export const AdminLogin = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [err, setErr] = useState(null);

  const onHandleChangeInput = (e) => {
    setInputValues(prev => ({
      ...prev,
      ...{[e.target.name]: e.target.value}
    }));
  };

  const login = async () => {
    try {
      const res = await axios.get(`${SERVER}admin/`, { params: inputValues });
      if (!!res.data.email && res.status === 200) {
        localStorage.setItem('email', res.data.email);
        setErr(null);
      }
    } catch (e) {
      setErr(e.response.data);
    } finally {
      setInputValues({
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className='adminLogin'>
      <div>
        <label> Email: </label> <input type='email' name='email' value={inputValues.email} onChange={onHandleChangeInput} />
        <label> Password: </label> <input type='password' name='password' value={inputValues.password} onChange={onHandleChangeInput} />
        <button onClick={login}>log in</button>
        {!!err && <p>{err}</p>}
      </div>
    </div>
  )
};
