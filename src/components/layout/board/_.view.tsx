import { MouseEventHandler, useCallback } from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import useLoading from '~hooks/loading';
import { useAppDispatch, useAppSelector } from '~plugins/store';
import { authSliceActions } from '~plugins/store/auth';
import { userApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './_.module.scss';

export default function BoardLayout() {
  const dispatch = useAppDispatch();

  const loading = useLoading();

  const authUser = useAppSelector((state) => state.auth.user);

  const onClickSignOut = useCallback<MouseEventHandler<HTMLAnchorElement>>(async () => {
    try {
      loading.show();

      await userApi.signOut();
      dispatch(authSliceActions.setUser(null));
    } catch (error) {
      alert(getErrorMessage(error));
    } finally {
      loading.hide();
    }
  }, [dispatch, loading]);

  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary shadow sticky-top" data-bs-theme="dark">
        <div className="container-fluid px-md-5">
          <h1 className="navbar-brand fw-bold mb-0">
            <Link className="text-decoration-none text-light" to="/home">
              Employee Polls
            </Link>
          </h1>

          <button
            className="btn btn-light d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse mt-1 text-end" id="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new">
                  New
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-md-none">
                <hr className="border-light m-0" />
              </li>
              {authUser && (
                <li className="nav-item dropdown" data-bs-theme="light">
                  <span
                    className="nav-link dropdown-toggle d-flex align-items-center justify-content-end gap-1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={authUser.avatarURL} className={styles.avatar} alt="avatar" />
                    <span className="fw-medium mt-1 ms-1">{authUser.name}</span>
                  </span>
                  <ul className="dropdown-menu text-end">
                    <li>
                      <Link className="dropdown-item" to="/" onClick={onClickSignOut}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
