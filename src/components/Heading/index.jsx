import * as Style from './style';
import P from 'prop-types';

export const Heading = ({ children, light }) => {
  return <Style.Title light={light}>{children}</Style.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
