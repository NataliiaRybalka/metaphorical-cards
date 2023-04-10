import { useState } from 'react';

import { Fulcrum } from './Fulcrum';
import { InternalCompass } from './InternalCompass';
import { MainPage } from './MainPage';

import './components.css';

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
    {
      id: 1,
      tabTitle: 'Главная',
    },
    {
      id: 2,
      tabTitle: 'Точка Опоры',
    },
    {
      id: 3,
      tabTitle: 'Внутренний компас',
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className='container'>
      <div className='tabs'>
        {tabs.map((tab, i) =>
          <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
        )}
      </div>

      <div className='content'>
        {currentTab === '1' && <MainPage />}
        {currentTab === '2' && <Fulcrum />}
        {currentTab === '3' && <InternalCompass />}
      </div>
    </div>
  );
};
