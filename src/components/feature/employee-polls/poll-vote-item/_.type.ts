import { MouseEventHandler, PropsWithChildren } from 'react';

import { PropsWithClassName } from '~types/component/ui.type';

export type PollVoteItemProps = PropsWithChildren<
  PropsWithClassName<{
    onVote: MouseEventHandler<HTMLButtonElement>;
  }>
>;
