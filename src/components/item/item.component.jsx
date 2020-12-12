import React from 'react';

import Button from '../button/button.component';

import { ItemContainer } from './item.styles';

const Item = ({ name }) => (
  <ItemContainer>
    <li> {name} </li>
    <Button name='x' />
  </ItemContainer>
);

export default Item;