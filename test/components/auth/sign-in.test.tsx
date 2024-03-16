import AuthSignIn from '~components/feature/auth/sign-in';
import api from '~services/api';
import { TestContainer } from '~test/__mocks__/container';

import { fireEvent, render, screen } from '@testing-library/react';

describe('AuthSignIn renders correctly', () => {
  test('AuthSignIn render as expected', () => {
    const { baseElement } = render(
      <TestContainer>
        <AuthSignIn />
      </TestContainer>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});

describe('AuthSignIn work correctly', () => {
  beforeAll(() => {
    api.init();

    render(
      <TestContainer>
        <AuthSignIn />
      </TestContainer>,
    );
  });

  test('Form validate as expect', async () => {
    const buttonSignIn = screen.getByText<HTMLButtonElement>('Sign In', { selector: 'button[type="submit"]' });
    fireEvent.click(buttonSignIn);

    const message1 = await screen.findByText<HTMLDivElement>('Please enter user', { selector: 'div.invalid-feedback' });
    expect(message1).toBeInTheDocument();

    const message2 = await screen.findByText<HTMLDivElement>('Please enter password', { selector: 'div.invalid-feedback' });
    expect(message2).toBeInTheDocument();
  });
});
