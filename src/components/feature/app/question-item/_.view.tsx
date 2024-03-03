import { useMemo } from 'react';

import classNames from 'classnames';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { QuestionItemProps } from './_.type';

export default function QuestionItem({ question, buttonText, className }: Readonly<QuestionItemProps>) {
  const dateTimeFormat = useMemo<string>(() => {
    const dateTime = moment(question.timestamp);

    return dateTime.format('h:m:s A - M/D/y');
  }, [question.timestamp]);

  return (
    <div className={classNames('card shadow-sm', className)}>
      <div className="card-body text-center">
        <div className="card-title">
          <span className="fs-7 text-secondary">Poll by</span>
          <h5>{question.authorUser.name}</h5>
        </div>
        <p className="card-text text-secondary">{dateTimeFormat}</p>
      </div>
      <div className="card-footer">
        <Link className="btn btn-outline-primary w-100" to={`/questions/${question.id}`}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
