import classNames from 'classnames';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PollVoteItemProps } from './_.type';

export default function PollVoteItem({ className, children, onVote }: Readonly<PollVoteItemProps>) {
  return (
    <div className={classNames('card shadow-sm', className)}>
      <div className="card-body text-center">
        <p className="card-text">{children}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-primary w-100" onClick={onVote}>
          <FontAwesomeIcon icon={faThumbsUp} /> Vote
        </button>
      </div>
    </div>
  );
}
