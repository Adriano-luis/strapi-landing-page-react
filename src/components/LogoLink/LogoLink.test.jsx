import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" scrImg="imgae.jpg" />,
    );
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'imgae.jpg',
    );
  });

  it('should match snapshot ', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" scrImg="imgae.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
