import { useState } from 'react';

import { FULCRUM } from '../constants';
import { Question } from './Question';
import { Card } from './Card';

import './components.css';

export const Fulcrum = () => {
  const deck = FULCRUM;
  const [card, setCard] = useState(null);

  return (
    <div className='cardQuestionDiv'>
      {
        !(card) 
        ? <>
          <h1>Точка Опоры</h1>
          <p>
            «Точка Опоры» — это ресурсные карты. Там изображены позитивные сценки, пейзажи и абстракции, которые призваны вдохновить Тебя, подарить силы и радость. Такие карты дают возможность сформулировать новое решение, по-другому посмотреть на себя, обрести внутреннюю опору и найти внешний ресурс.
          </p>

          <Question deck={deck} setCard={setCard} />
        </>
        : <Card card={card} />
      }
    </div>
  )
};
