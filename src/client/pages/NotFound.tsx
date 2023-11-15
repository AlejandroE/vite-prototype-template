import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.NotFound}>
      <h1>Not found</h1>
      <Link to="/">Back home</Link>
    </div>
  );
}

export default NotFound;
