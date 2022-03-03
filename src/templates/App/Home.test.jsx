import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render Home', () => {
    renderTheme(<Home />);
  });
});
/*const headingContainer = screen.getByRole('heading', {
    name: 'oi',
  }).parentElement;
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');*/
