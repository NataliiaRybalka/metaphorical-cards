import { useState } from 'react';
import axios from 'axios';

import { FULCRUM, INTERNAL_COMPASS, SERVER } from '../constants';

import './components.css';

export const AdminPanel = () => {
  const [deck, setDeck] = useState(FULCRUM);
  const [inputValues, setInputValues] = useState({
    file: '',
    deck: '',
    description: '',
  });
  // const [rows, setRows] = useState(0);
  // const [cards, setCards] = useState([]);

  const onHandleChangeDeck = (e) => {
    setDeck(e.target.value);
  };

  const onHandleChangeInput = (e) => {
    if (e.target.name === 'file') {
      setInputValues(prev => ({
        ...prev,
        ...{
          file: e.target.files[0],
          fileUrl: URL.createObjectURL(e.target.files[0])
        }
      }));
    } else {
      setInputValues(prev => ({
        ...prev,
        ...{
          description: e.target.value,
          deck,
        }
      }));
    }
  };

  // const handleAddRow = () => {
  //   setRows(rows + 1)
  // }

  // const saveOneCard = () => {
  //   setCards([...cards, inputValues]);
  // };

  const onHandleSave = async () => {
    setInputValues(delete inputValues.fileUrl);

    const formData = new FormData();
    if (inputValues.image) formData.append('file', inputValues.image);
    Object.entries(inputValues).map(([key, value]) => formData.append(key, value));

    await axios.post(`${SERVER}cards/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=something',
      }
    });
    
    setInputValues({
      file: '',
      deck: '',
      description: '',
    });
  };

  return (
    <div>
      <h1>Админ Панель</h1>

      <div className='adminPanelDiv'>
        <select value={deck} onChange={onHandleChangeDeck}>
          <option value={FULCRUM}>Точка Опоры</option>
          <option value={INTERNAL_COMPASS}>Внутренний Компас</option>
        </select>
        <br />
        {/* <button className='addRowBtn' onClick={handleAddRow}>Add a row</button> */}

        <table className='adminTable'>
          <thead>
            <tr>
              <td>Изображение</td>
              <td>Описание</td>
            </tr>
          </thead>
          <tbody>
            {/* {[...Array(rows)].map((el, i) => (
              <tr key={i}>
                <td>
                  <input type='file' name='file' onChange={onChangeInputHandler} />
                  {(inputValues && inputValues.file) && 
                    <img src={inputValues.fileUrl} alt={inputValues.fileUrl.name} className='previewCard' />
                  }
                </td>
                <td><textarea name='description' rows='5' onChange={onChangeInputHandler} /></td>
                <td onClick={saveOneCard}>save</td>
              </tr>
            ))} */}
            <tr>
              <td>
                <input type='file' name='file' onChange={onHandleChangeInput} value={undefined} />
                {(inputValues && inputValues.file) && 
                  <img src={inputValues.fileUrl} alt={inputValues.fileUrl.name} className='previewCard' />
                }
              </td>
              <td>
                <textarea name='description' rows='5' onChange={onHandleChangeInput} value={inputValues.description} />
              </td>
              {/* <td onClick={saveOneCard}>save</td> */}
            </tr>
          </tbody>
        </table>

        <button className='saveCardBtn' onClick={onHandleSave}>Сохранить</button>
      </div>
    </div>
  )
};
