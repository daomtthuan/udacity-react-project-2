import PollCreate, { PollCreateProps } from '~components/feature/employee-polls/poll-create';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

const testCases: PollCreateProps[] = [
  {
    userId: 'thuandmt',
  },

  {
    userId: 'tylermcginnis',
  },
];

describe('Renders correctly', () => {
  testCases.map((props) => {
    test(`${PollCreate.name} should render as expected`, () => {
      const component = render(
        <TestContainer>
          <PollCreate {...props} />
        </TestContainer>,
      );

      expect(component.baseElement).toMatchSnapshot();
    });
  });
});
