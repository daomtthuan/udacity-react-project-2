import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

import styles from './_.module.scss';

export default function DefaultLayout() {
  return (
    <div className={classNames(styles.container, 'd-flex flex-column mx-auto p-4')}>
      <h1 className="text-primary text-center mb-0">Employee Polls</h1>

      <div className={styles.banner}>
        <img className="img-fluid" src="/images/background/banner.jpg" alt="banner" />
      </div>

      <div className="bg-light border rounded shadow-sm py-3 px-4">
        <Outlet />
      </div>
    </div>
  );
}
