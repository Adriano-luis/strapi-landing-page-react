import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { screen } from '@testing-library/react';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Children</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
