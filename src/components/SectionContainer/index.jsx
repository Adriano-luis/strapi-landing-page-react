import * as Style from './styles';
import P from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <Style.Container>{children}</Style.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
