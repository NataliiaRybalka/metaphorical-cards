import { Route } from 'react-router-dom';

import { AdminPanel } from './components/AdminPanel';
import { Tabs } from './components/Tabs';

function App() {

  return (
    <div className='App'>
      <Route path='/admin' component={ AdminPanel } />
      <Route path='/' component={ Tabs } exact />

      <footer>
        <div>
          <p>
            <span>
              &copy; {1900 + new Date().getYear()}{" "}
              <a
                href='https://github.com/NataliiaRybalka'
                target='blank'
                className='footer-link'
              >
                Nataliia Rybalka
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
