import { useState } from 'react';

import { AdminPanelAdd } from './AdminPanelAdd';
import { AdminPanelList } from './AdminPanelList';

import './components.css';

export const AdminTabs = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
    {
      id: 1,
      tabTitle: 'Список карт',
    },
    {
      id: 2,
      tabTitle: 'Добавить карту',
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
        {currentTab === '1' && <AdminPanelList />}
        {currentTab === '2' && <AdminPanelAdd />}
      </div>
    </div>
  );
};
