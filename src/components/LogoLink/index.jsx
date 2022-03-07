import * as Style from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, scrImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Style.Container href={link}>
        {!!scrImg && <img src={scrImg} alt={text} />}
        {!scrImg && text}
      </Style.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  scrImg: P.string,
  link: P.string.isRequired,
};
