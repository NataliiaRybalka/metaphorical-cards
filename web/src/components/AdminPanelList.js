import { useEffect, useState } from 'react';
import axios from 'axios';

import { FULCRUM, INTERNAL_COMPASS, SERVER } from '../constants';
import { AdminPanelListTable } from './AdminPanelListTable';

import './components.css';

export const AdminPanelList = () => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const res = await axios.get(`${SERVER}cards/`);
    setCards(res.data);
  };

  return (
    <div className='adminPanel'>
      <h1>Админ Панель</h1>

      {cards.fulcrum && <AdminPanelListTable table={FULCRUM} cards={cards.fulcrum} />}
      {cards.internalCompass && <AdminPanelListTable table={INTERNAL_COMPASS} cards={cards.internalCompass} />}
    </div>
  )
};
