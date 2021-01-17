import React from 'react';

//import { removeItem, editItem } from '../../redux/item-list/item-list.utils';
import Button from '../button/button.component';

import { ItemContainer, BtnContainer, ItemTextContainer, ArrowContainer, TextLiContainer } from './item.styles';

const Item = ({ setTodos, currentItem, allItems }) => {

  const handleCompleteBtnClick = () => {
    setTodos(allItems.map(item => {
      if (item.id === currentItem.id) {
        return {
          ...item,
          isCompleted: !currentItem.isCompleted
        }
      }
      return item;
    }));

    // It loops through all items in array and where id is matched with currentItem id then, 
    // just opposite the current value of isCompleted and return it.
  }

  const handleDeleteBtnClick = () => {
    setTodos(allItems.filter(item => item.id !== currentItem.id));

    // filter method loop through each element in allItems array
    // and render only those whose id doesn't match currentItem's id
  }

  const handleEditText = e => {
    let newText = e.target.innerText;
    if (newText !== "" || newText !== " " || newText !== null) {
      setTodos(allItems.map(item => {
        if (item.id === currentItem.id) {
          return {
            ...item,
            text: newText
          }
        }
        return item;
      }));
    }
  }

  const handleEditbtn = () => {
    setTodos(allItems.map(item => {
      if (item.id === currentItem.id) {
        return {
          ...item,
          isEditable: !currentItem.isEditable
        }
      }
      return item;
    }));

    // it loops through the array and check where id is equal to currentItem's id
    // then change isEditable property to opposite of current property
  }


  return (
    <ItemContainer>
      <ItemTextContainer>
        <ArrowContainer>&#10148;</ArrowContainer>
        <TextLiContainer
          contentEditable={currentItem.isEditable}
          isDone={currentItem.isCompleted}  // it apply completed styles acc. to isCompleted property
          onInput={handleEditText}
        >
          {currentItem.text}
        </TextLiContainer>
      </ItemTextContainer>
      <BtnContainer>
        <Button
          btnName="&#10007;"
          handleClick={handleDeleteBtnClick}
        />
        <Button
          btnName="&#9998;"
          handleClick={handleEditbtn}
        />
        <Button
          btnName="&#10003;"
          handleClick={handleCompleteBtnClick}
        />
      </BtnContainer>
    </ItemContainer>
  )
}

export default Item;
