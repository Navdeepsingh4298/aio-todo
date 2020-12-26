import React from 'react';

// component
import Item from '../item/item.component';

// Styled component
import { ItemListContainer } from './item-list.styles';

const ItemList = ({ items, setTodos }) => {

  return (
    <ItemListContainer>
      {
        items.map(item => {
          return (
            <Item key={item.id} itemText={item.text} currentItem={item} setTodos={setTodos} />
          )
        })
      }
    </ItemListContainer>
  )
}

export default ItemList;

