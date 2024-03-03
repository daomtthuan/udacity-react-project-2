import classNames from 'classnames';
import { Link, Outlet } from 'react-router-dom';

import styles from './_.module.scss';

export default function ErrorLayout() {
  return (
    <div className={classNames(styles.container, 'd-flex flex-column mx-auto p-4')}>
      <h1 className="text-primary text-center mb-0">Employee Polls</h1>

      <img className="img-fluid" src="/images/background/error.jpg" alt="banner" />

      <div className="d-flex flex-column align-items-center gap-2 bg-light border rounded shadow-sm py-3 px-4">
        <Outlet />

        <Link className="btn btn-outline-primary" to="/" replace>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
