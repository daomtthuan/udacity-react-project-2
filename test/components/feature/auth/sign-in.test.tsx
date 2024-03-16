import AuthSignIn from '~components/feature/auth/sign-in';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('AuthSignIn renders correctly', () => {
  test('AuthSignIn render as expected', () => {
    const component = render(
      <TestContainer>
        <AuthSignIn />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
