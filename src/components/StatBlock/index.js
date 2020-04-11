import * as React from 'react';
import { StyledBlock } from './styles';

const StatBlock = (props) => {
  return <StyledBlock>{props.children}</StyledBlock>;
};

export default StatBlock;
