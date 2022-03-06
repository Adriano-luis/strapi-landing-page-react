import * as Style from './styles';
import P from 'prop-types';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Style.Container href={link} target={target}>
      {children}
    </Style.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
