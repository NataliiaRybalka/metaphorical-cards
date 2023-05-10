import { useEffect, useState } from 'react';
import axios from 'axios';

import { SERVER } from '../constants';

import './components.css';

export const AdminPanelList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const res = await axios.get(`${SERVER}cards/`);
    console.log(res);
    setCards(res.data);
  };

  return (
    <div className='adminPanel'>
      <h1>Админ Панель</h1>


    </div>
  )
};
