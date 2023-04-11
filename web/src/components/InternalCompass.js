import { useState } from 'react';

import { INTERNAL_COMPASS } from '../constants';
import { Question } from './Question';
import { Card } from './Card';

import './components.css';

export const InternalCompass = () => {
  const deck = INTERNAL_COMPASS;
  const [card, setCard] = useState(null);

  return (
    <div className='cardQuestionDiv'>
      {
        !(card) 
        ? <>
          <h1>Внутренний компас</h1>
          <p>
            «Внутренний компас» является универсальной колодой с большим набором самых разных образов и сценок, которые подходят для проработки почти любой ситуации. Она энергетически наполненная и очень гармонично отражает всё происходящее внутри человека.
          </p>

          <Question deck={deck} setCard={setCard} />
        </>
        : <>
          <p>
            А вот и Твоя карта! <br />
            Первая мысль, которая пришла в голову, когда Ты взглянула на неё — это и есть ответ на Твой вопрос. <br />
            Запиши эту мысль в блокноте или заметках телефона, а спустя время вернись к ней. Инсайты обеспечены!
          </p>
          <Card card={card} />
        </>
      }
    </div>
  )
};
