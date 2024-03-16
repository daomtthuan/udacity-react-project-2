import App from '~components/app';

import { render } from '@testing-library/react';

describe('App renders correctly', () => {
  test('App render as expected', () => {
    const component = render(<App />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
