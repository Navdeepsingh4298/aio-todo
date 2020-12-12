import React from 'react';

// component
import Item from '../item/item.component';

// Styled component
import { ItemListContainer } from './item-list.styles';

const ItemList = () => (
  <ItemListContainer>
    <Item
      name='buy milk and biscuits and bread'
    />
    <Item
      name='buy milk'
    />
    <Item
      name='buy milk'
    />
    <Item
      name='buy milk'
    />
    <Item
      name='buy milk'
    />
    <Item
      name='buy milk'
    />
    <Item
      name='buy milk'
    />
    <Item
      name='buy milk'
    />

  </ItemListContainer>
)

export default ItemList;