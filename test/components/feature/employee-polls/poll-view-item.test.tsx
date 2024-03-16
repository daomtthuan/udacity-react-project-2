import PollViewItem, { PollViewItemProps } from '~components/feature/employee-polls/poll-view-item';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

const testCases: PollViewItemProps[] = [
  {
    className: 'h-100',
    voted: true,
    rather: true,
    voteCount: 0,
    percentage: 0,
    children: 'Have code reviews conducted by peers',
  },

  {
    className: 'h-100',
    voted: false,
    rather: true,
    voteCount: 2,
    percentage: 15,
    children: 'Have code reviews conducted by managers',
  },

  {
    className: 'h-100',
    voted: true,
    rather: true,
    voteCount: 10,
    percentage: 25,
    children: 'Build our new application with Javascript',
  },

  {
    className: 'h-100',
    voted: true,
    rather: false,
    voteCount: 2,
    percentage: 20,
    children: 'Build our new application with Typescript',
  },
];

describe('Renders correctly', () => {
  testCases.map((props) => {
    test(`${PollViewItem.name} should render as expected`, () => {
      const component = render(
        <TestContainer>
          <PollViewItem {...props} />
        </TestContainer>,
      );

      expect(component.baseElement).toMatchSnapshot();
    });
  });
});
