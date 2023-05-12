import { FULCRUM } from '../constants';

import './components.css';

export const AdminPanelListTable = ({ table, cards }) => {

  return (
    <table className='adminTableList'>
      <caption>
        <h2>{table === FULCRUM 
          ? 'Точка опоры'
          : 'Внутренний компас'
        }</h2>
      </caption>

      <thead>
        <tr>
          <td>
            <span>Изображение</span>
          </td>
          <td>
            <span>Описание</span>
          </td>
        </tr>
      </thead>

      <tbody>
        {cards && cards.map(card => (
          <tr key={card._id}>
            <td>{card.image}</td>
            <td>{card.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
