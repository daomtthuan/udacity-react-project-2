import classNames from 'classnames';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PollViewItemProps } from './_.type';

export default function PollViewItem({ voted, rather, voteCount, percentage, className, children }: Readonly<PollViewItemProps>) {
  return (
    <div
      className={classNames(
        'card',
        {
          'opacity-50': !rather,
          'shadow': rather,
        },
        className,
      )}
    >
      <div className="card-body text-center">
        <p className="card-text">{children}</p>
      </div>
      <div className="card-footer d-flex align-items-center justify-content-center gap-1">
        <span
          className={classNames('fw-medium', {
            'text-primary': rather,
          })}
        >
          <FontAwesomeIcon icon={faThumbsUp} /> {percentage}%
        </span>
        <span>
          ({voteCount} {voteCount >= 2 ? 'votes' : 'vote'})
        </span>
        {voted && <span className="fs-7 text-muted"> - You voted this</span>}
      </div>
    </div>
  );
}
