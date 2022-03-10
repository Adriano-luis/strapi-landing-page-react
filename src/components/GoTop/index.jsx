import * as Style from './styles';
import P from 'prop-types';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Style.Container href="#" aria-label="Go to Top" title="Go to Top">
      <KeyboardArrowUp />
    </Style.Container>
  );
};
