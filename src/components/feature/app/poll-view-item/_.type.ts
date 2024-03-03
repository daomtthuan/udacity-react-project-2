import { PropsWithChildren } from 'react';

import classNames from 'classnames';

export type OptionResult = {
  percentage: number;
  voteCount: number;
};

export type PollViewItemProps = PropsWithChildren<
  {
    rather: boolean;
    voted: boolean;
    className?: classNames.Argument;
  } & OptionResult
>;
