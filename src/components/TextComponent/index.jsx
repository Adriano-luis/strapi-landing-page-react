import * as Style from './styles';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
  return <Style.Container>{children}</Style.Container>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
