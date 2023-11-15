import { useState } from 'react';
import reactLogo from '../assets/react.svg';

import styles from './Home.module.scss';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles.Logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${styles.Logo} ${styles.React}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.Card}>
        <button type="button" onClick={() => setCount((_count) => _count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.ReadDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
