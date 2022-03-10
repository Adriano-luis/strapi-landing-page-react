import * as Style from './styles';
import P from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <Style.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Style.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
