import React from 'react';

// component
import Button from '../button/button.component';

// styled component
import { InputBoxContainer, Input } from './input-box.styles';

const InputBox = () => (
  <InputBoxContainer>
    <Input
      type='text'
      name='input'
      placeholder='Click to type here'
    />
    <Button
      name='+'
    />
  </InputBoxContainer>

)
export default InputBox;