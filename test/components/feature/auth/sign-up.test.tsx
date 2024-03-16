import AuthSignUp from '~components/feature/auth/sign-up';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('AuthSignUp renders correctly', () => {
  test('AuthSignUp render as expected', () => {
    const component = render(
      <TestContainer>
        <AuthSignUp />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
