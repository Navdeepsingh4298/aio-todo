import React from 'react';

import { BtnContainer } from './button.styles';

const Button = ({ btnName, handleClick }) => (
  <BtnContainer onClick={handleClick}>
    {btnName}
  </BtnContainer>
)
export default Button;
