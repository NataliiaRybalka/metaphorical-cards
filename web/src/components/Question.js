import { useState } from 'react';
import axios from 'axios';

import { SERVER } from '../constants';

import './components.css';

export const Question = ({ deck, setCard }) => {
  const [question, setQuestion] = useState('Задай вопрос: ');

  const onHandleFocus = () => {
    setQuestion('');
  };

  const onHandleChange = (e) => {
    setQuestion(e.target.value);
  };

  const onHandleSend = async () => {
    const res = await axios.get(`${SERVER}cards/${deck}`);
    setCard(res.data);
  };

  return (
    <div>
      <textarea value={question} onFocus={onHandleFocus} onChange={onHandleChange} />
      <button onClick={onHandleSend}>отправить</button>
    </div>
  )
};
