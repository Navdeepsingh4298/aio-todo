import React from 'react';

// component
import Item from '../item/item.component';

// Styled component
import { ItemListContainer } from './item-list.styles';

const ItemList = ({ items, setTodos }) => {

  // TODO: Make li 's  sortable so that it can be arranged in right order

  return (
    <ItemListContainer>
      {
        items.map(item => {
          return (
            <Item
              key={item.id}
              allItems={items}
              currentItem={item}
              setTodos={setTodos}
            />
          )
        })
      }
    </ItemListContainer>
  )
}

export default ItemList;

