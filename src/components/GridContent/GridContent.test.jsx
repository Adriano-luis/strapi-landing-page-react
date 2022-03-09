import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render GridContent', () => {
    const { container } = renderTheme(<GridContent {...mock} />);

    expect(container).toMatchSnapshot();
  });

  it('should render GridContent', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
