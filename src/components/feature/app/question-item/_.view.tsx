import { useMemo } from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';

import { QuestionItemProps } from './_.type';

export default function QuestionItem({ data }: Readonly<QuestionItemProps>) {
  const dateTimeFormat = useMemo<string>(() => {
    const dateTime = moment(data.timestamp);

    return dateTime.format('h:m:s A - M/D/y');
  }, [data.timestamp]);

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title">{data.author}</h5>
        <p className="card-text text-secondary">{dateTimeFormat}</p>
      </div>
      <div className="card-footer">
        <Link className="btn btn-outline-primary w-100" to={`/questions/${data.id}`}>
          Show
        </Link>
      </div>
    </div>
  );
}
