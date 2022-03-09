import { renderTheme } from '../../styles/render-theme';
import { GridTwoColoumn } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridTwoColoumn />', () => {
  it('should render GridTwoColoumn', () => {
    const { container } = renderTheme(<GridTwoColoumn {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
