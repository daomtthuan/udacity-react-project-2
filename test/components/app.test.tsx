import App from '~components/app';

import { render } from '@testing-library/react';

describe('Renders correctly', () => {
  test(`${App.name} should render as expected`, () => {
    const component = render(<App />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
