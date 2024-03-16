import { PropsWithChildren } from 'react';

import { PropsWithClassName } from '~types/component/ui.type';

export type OptionResult = {
  percentage: number;
  voteCount: number;
};

export type PollViewItemProps = PropsWithChildren<
  PropsWithClassName<
    {
      rather: boolean;
      voted: boolean;
    } & OptionResult
  >
>;
