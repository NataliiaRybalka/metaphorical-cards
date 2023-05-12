import { useEffect, useState } from 'react';
import axios from 'axios';

import { FULCRUM, INTERNAL_COMPASS, SERVER } from '../constants';

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
console.log(cards);
  return (
    <div className='adminPanel'>
      <h1>Админ Панель</h1>

      {cards[FULCRUM] && 
        <table className='adminTableList'>
          <thead>
            <tr>
              <td>
                <h2>FULCRUM</h2>
              </td>
            </tr>
            <tr>
              <td>
                <span>Изображение</span>
              </td>
              <td>
                <span>Описание</span>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      }
    </div>
  )
};
