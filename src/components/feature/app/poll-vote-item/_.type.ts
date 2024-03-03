import { MouseEventHandler, PropsWithChildren } from 'react';

import classNames from 'classnames';

export type PollVoteItemProps = PropsWithChildren<{
  className?: classNames.Argument;

  onVote: MouseEventHandler<HTMLButtonElement>;
}>;
