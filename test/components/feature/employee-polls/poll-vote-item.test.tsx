import PollVoteItem, { PollVoteItemProps } from '~components/feature/employee-polls/poll-vote-item';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('PollVoteItem renders correctly', () => {
  test.each<PollVoteItemProps>([
    {
      className: 'h-100',
      children: 'Have code reviews conducted by peers',
      onVote: () => {},
    },

    {
      className: 'h-100',
      children: 'Have code reviews conducted by managers',
      onVote: () => {},
    },
  ])('PollVoteItem render as expected with props %o', (props) => {
    const component = render(
      <TestContainer>
        <PollVoteItem {...props} />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
