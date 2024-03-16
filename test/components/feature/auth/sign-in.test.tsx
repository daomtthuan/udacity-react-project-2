import AuthSignIn from '~components/feature/auth/sign-in';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('Renders correctly', () => {
  test(`${AuthSignIn.name} should render as expected`, () => {
    const component = render(
      <TestContainer>
        <AuthSignIn />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
