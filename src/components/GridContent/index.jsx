import * as Style from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Style.Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Style.Html>
          <TextComponent>{html}</TextComponent>
        </Style.Html>
      </Style.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
