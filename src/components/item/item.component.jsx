import React from 'react';

//import { removeItem, editItem } from '../../redux/item-list/item-list.utils';
import Button from '../button/button.component';

import { ItemContainer, BtnContainer, ItemTextContainer, ArrowContainer, TextLiContainer } from './item.styles';

const Item = ({ itemText, setTodos, currentItem }) => {

  let isEditable = false;
  let isAutoFocus = false;

  const handleCompleteBtnClick = () => {
    currentItem.completed = true;
    console.log(currentItem);

  }

  const handleDeleteBtnClick = (e) => {
    console.log(itemText)
  }

  const handleEditText = e => {
    itemText = (e.target.innerText);
    console.log(itemText);
  }

  const handleEditbtn = () => {
    isEditable = !isEditable;
    isAutoFocus = !isAutoFocus;
  }

  return (
    <ItemContainer>
      <ItemTextContainer>
        <ArrowContainer>&#10148;</ArrowContainer>
        <TextLiContainer
          contentEditable={isEditable}
          autoFocus={isAutoFocus}
          onInput={handleEditText}
        >
          {itemText}
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
