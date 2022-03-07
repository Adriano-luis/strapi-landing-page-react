import { SectionContainer } from '../SectionContainer';
import * as Style from './styles';
import P from 'prop-types';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Style.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Style.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
