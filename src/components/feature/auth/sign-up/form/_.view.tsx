import { FormEventHandler, useMemo } from 'react';

import classNames from 'classnames';
import { FieldPathValue, useForm, Validate } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useLoading from '~hooks/loading';
import { useAppDispatch } from '~plugins/store';
import { authSliceActions } from '~plugins/store/auth';
import { userApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

import { AuthSignUpFormValues } from './_.type';

const validateRepeatPassword: Validate<FieldPathValue<AuthSignUpFormValues, 'repeatPassword'>, AuthSignUpFormValues> = (value, formValues) => {
  if (formValues.password !== value) {
    return 'Re-entered password does not match';
  }

  return true;
};

export default function AuthSignUpForm() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthSignUpFormValues>();

  const loading = useLoading();

  const onSubmit = useMemo<FormEventHandler<HTMLFormElement>>(
    () =>
      handleSubmit(async (formValues) => {
        try {
          loading.show();

          const user = await userApi.createUser(formValues);
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
        <label htmlFor="input-name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={classNames('form-control', {
            'is-invalid': errors.name,
          })}
          id="input-name"
          autoComplete="name"
          {...register('name', {
            required: {
              value: true,
              message: 'Please enter name',
            },
          })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
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
          autoComplete="new-password"
          {...register('password', {
            required: {
              value: true,
              message: 'Please enter password',
            },
          })}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>
      <div className="my-3">
        <label htmlFor="input-repeat-password" className="form-label">
          Re-enter password
        </label>
        <input
          type="password"
          className={classNames('form-control', {
            'is-invalid': errors.repeatPassword,
          })}
          id="input-repeat-password"
          autoComplete="off"
          {...register('repeatPassword', {
            required: {
              value: true,
              message: 'Please re-enter password',
            },
            validate: validateRepeatPassword,
          })}
        />
        {errors.repeatPassword && <div className="invalid-feedback">{errors.repeatPassword.message}</div>}
      </div>

      <div className="mt-3 mb-2 d-flex align-items-center justify-content-end gap-2">
        <Link to="/" className="btn btn-outline-primary">
          Back to Sign In
        </Link>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
}
