import { FormEventHandler, useMemo } from 'react';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useLoading from '~hooks/loading';
import { questionApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

import { PollCreateFormValues, PollCreateProps } from './_.type';

export default function PollCreate({ userId }: Readonly<PollCreateProps>) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PollCreateFormValues>();

  const loading = useLoading();

  const onSubmit = useMemo<FormEventHandler<HTMLFormElement>>(
    () =>
      handleSubmit(async (formValues) => {
        try {
          loading.show();

          await questionApi.createQuestion({
            ...formValues,
            author: userId,
          });

          navigate('/home');
        } catch (error) {
          setError('root', {
            message: getErrorMessage(error),
          });
        } finally {
          loading.hide();
        }
      }),
    [handleSubmit, loading, navigate, setError, userId],
  );

  return (
    <form onSubmit={onSubmit}>
      {errors.root && <div className="my-3 text-danger">{errors.root.message}</div>}

      <div className="my-3">
        <label htmlFor="input-user" className="form-label">
          First option
        </label>
        <input
          type="text"
          className={classNames('form-control', {
            'is-invalid': errors.optionOneText,
          })}
          id="input-option-one"
          autoComplete="off"
          {...register('optionOneText', {
            required: {
              value: true,
              message: 'Please enter first option',
            },
          })}
        />
        {errors.optionOneText && <div className="invalid-feedback">{errors.optionOneText.message}</div>}
      </div>
      <div className="my-3">
        <label htmlFor="input-user" className="form-label">
          Second option
        </label>
        <input
          type="text"
          className={classNames('form-control', {
            'is-invalid': errors.optionTwoText,
          })}
          id="input-option-one"
          autoComplete="off"
          {...register('optionTwoText', {
            required: {
              value: true,
              message: 'Please enter second option',
            },
          })}
        />
        {errors.optionTwoText && <div className="invalid-feedback">{errors.optionTwoText.message}</div>}
      </div>

      <div className="mt-3 mb-2 d-flex align-items-center justify-content-end gap-2">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  );
}
