import PollVoteItem, { PollVoteItemProps } from '~components/feature/employee-polls/poll-vote-item';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

const testCases: PollVoteItemProps[] = [
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
];

describe('Renders correctly', () => {
  testCases.map((props) => {
    test(`${PollVoteItem.name} should render as expected`, () => {
      const component = render(
        <TestContainer>
          <PollVoteItem {...props} />
        </TestContainer>,
      );

      expect(component.baseElement).toMatchSnapshot();
    });
  });
});
