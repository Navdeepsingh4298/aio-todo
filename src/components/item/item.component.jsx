import React from 'react';

//import { removeItem, editItem } from '../../redux/item-list/item-list.utils';
import Button from '../button/button.component';

import { ItemContainer, BtnContainer, ItemTextContainer, ArrowContainer, TextLiContainer } from './item.styles';

const Item = ({ setTodos, currentItem, allItems }) => {

  const handleCompleteBtnClick = () => {
    currentItem.completed = true;
    console.log(currentItem);
    // when completed apply strike through style

  }

  const handleDeleteBtnClick = (e) => {
    console.log(currentItem);
    // setTodos()
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
