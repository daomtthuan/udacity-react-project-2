import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import AuthContainer from '~plugins/auth/container';

import styles from './_.module.scss';

export default function WelcomeLayout() {
  return (
    <AuthContainer>
      <div className={classNames(styles.container, 'd-flex flex-column mx-auto p-4')}>
        <h1 className="text-primary text-center mb-0">Employee Polls</h1>

        <img className="img-fluid" src="/images/background/banner.jpg" alt="banner" />

        <div className="bg-light border rounded shadow-sm py-3 px-4">
          <Outlet />
        </div>
      </div>
    </AuthContainer>
  );
}
