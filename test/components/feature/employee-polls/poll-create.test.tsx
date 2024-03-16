import PollCreate, { PollCreateProps } from '~components/feature/employee-polls/poll-create';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('PollCreate renders correctly', () => {
  test.each<PollCreateProps>([
    {
      userId: 'thuandmt',
    },

    {
      userId: 'tylermcginnis',
    },
  ])('PollCreate render as expected with props %o', (props) => {
    const component = render(
      <TestContainer>
        <PollCreate {...props} />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
