import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridText />', () => {
  it('should render GridText with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render GridText without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
