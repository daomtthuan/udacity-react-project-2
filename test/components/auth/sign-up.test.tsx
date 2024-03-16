import AuthSignUp from '~components/feature/auth/sign-up';
import { TestContainer } from '~test/__mocks__/container';

import { render } from '@testing-library/react';

describe('AuthSignUp renders correctly', () => {
  test('AuthSignUp render as expected', () => {
    const { baseElement } = render(
      <TestContainer>
        <AuthSignUp />
      </TestContainer>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
