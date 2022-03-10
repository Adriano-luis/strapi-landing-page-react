import * as Style from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColoumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Style.Container background={background}>
        <Style.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Style.TextContainer>
        <Style.ImageContainer>
          <Style.Image src={srcImg} alt={title} />
        </Style.ImageContainer>
      </Style.Container>
    </SectionBackground>
  );
};

GridTwoColoumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
