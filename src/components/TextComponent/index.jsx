import * as Style from './styles';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
  return <Style.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
