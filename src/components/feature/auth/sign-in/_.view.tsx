import { FormEventHandler, useMemo } from 'react';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useLoading from '~hooks/loading';
import { useAppDispatch } from '~plugins/store';
import { authSliceActions } from '~plugins/store/auth';
import { userApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

import { AuthSignInFormValues } from './_.type';

export default function AuthSignIn() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthSignInFormValues>();

  const loading = useLoading();

  const onSubmit = useMemo<FormEventHandler<HTMLFormElement>>(
    () =>
      handleSubmit(async (formValues) => {
        try {
          loading.show();

          const user = await userApi.signIn(formValues);
          dispatch(authSliceActions.setUser(user));
        } catch (error) {
          setError('root', {
            message: getErrorMessage(error),
          });
        } finally {
          loading.hide();
        }
      }),
    [dispatch, handleSubmit, loading, setError],
  );

  return (
    <form onSubmit={onSubmit}>
      {errors.root && <div className="my-3 text-danger">{errors.root.message}</div>}

      <div className="my-3">
        <label htmlFor="input-user" className="form-label">
          User
        </label>
        <input
          type="text"
          className={classNames('form-control', {
            'is-invalid': errors.userId,
          })}
          id="input-user"
          autoComplete="username"
          {...register('userId', {
            required: {
              value: true,
              message: 'Please enter user',
            },
          })}
        />
        {errors.userId && <div className="invalid-feedback">{errors.userId.message}</div>}
      </div>
      <div className="my-3">
        <label htmlFor="input-password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={classNames('form-control', {
            'is-invalid': errors.password,
          })}
          id="input-password"
          autoComplete="current-password"
          {...register('password', {
            required: {
              value: true,
              message: 'Please enter password',
            },
          })}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      <div className="mt-3 mb-2 d-flex align-items-center justify-content-end gap-2">
        <Link to="/sign-up" className="btn btn-outline-primary">
          Sign Up
        </Link>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
    </form>
  );
}
