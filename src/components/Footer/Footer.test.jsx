import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container } = renderTheme(<Footer html={'<h1>Hello</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
