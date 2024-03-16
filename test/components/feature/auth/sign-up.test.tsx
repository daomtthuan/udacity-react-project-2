import AuthSignUp from '~components/feature/auth/sign-up';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('Renders correctly', () => {
  test(`${AuthSignUp.name} should render as expected`, () => {
    const component = render(
      <TestContainer>
        <AuthSignUp />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
