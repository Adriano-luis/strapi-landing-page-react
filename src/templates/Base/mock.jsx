import linksmock from '../../components/NavLinks/mock';

export default {};

import GridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
    </>
  ),
  links: linksmock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
};
