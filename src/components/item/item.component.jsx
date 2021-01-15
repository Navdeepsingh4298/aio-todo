import React from 'react';

//import { removeItem, editItem } from '../../redux/item-list/item-list.utils';
import Button from '../button/button.component';

import { ItemContainer, BtnContainer, ItemTextContainer, ArrowContainer, TextLiContainer } from './item.styles';

const Item = ({ setTodos, currentItem, allItems }) => {

  const handleCompleteBtnClick = () => {
    currentItem.isCompleted = !currentItem.isCompleted;
    // It just opposite the current value of isCompleted
    // Then render all items with updated properties
  }

  const handleDeleteBtnClick = () => {
    setTodos(allItems.filter((el) => el.id !== currentItem.id));
    // filter method loop through each element in allItems array
    // and render only those whose id doesn't match currentItem's id
  }

  const handleEditText = e => {
    currentItem.text = (e.target.innerText);
    console.log(currentItem.text);

    // TODO: if text become empty then delete that li
    // check new text must not be empty or same  as other text
    // if so then alert or do something
  }

  // const handleEditbtn = () => {
  //   currentItem.isEditable = true;
  //   // isEditable = !isEditable;
  //   // isAutoFocus = !isAutoFocus;
  //   // make it editable
  // }

  return (
    <ItemContainer>
      <ItemTextContainer>
        <ArrowContainer>&#10148;</ArrowContainer>
        <TextLiContainer
          contentEditable={true}
          style={currentItem.isCompleted ? { textDecoration: 'lineThrough' } : null}
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
        {/* <Button
          btnName="&#9998;"
          handleClick={handleEditbtn}
        /> */}
        <Button
          btnName="&#10003;"
          handleClick={handleCompleteBtnClick}
        />
      </BtnContainer>
    </ItemContainer>
  )
}

export default Item;
