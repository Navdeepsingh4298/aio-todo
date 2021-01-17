import React from 'react';

//for toast notifications
import toaster from 'toasted-notes';

// component
import Button from '../button/button.component';

// styled components
import { ItemContainer, BtnContainer, ItemTextContainer, ArrowContainer, TextLiContainer } from './item.styles';


const Item = ({ setTodos, currentItem, allItems }) => {

  // completed todo button
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

  //delete todo button
  const handleDeleteBtnClick = () => {
    setTodos(allItems.filter(item => item.id !== currentItem.id));

    // Explanation:-
    // filter method loop through each element in allItems array
    // and render only those whose id doesn't match currentItem's id
  }

  const handleEditText = e => {
    let newText = e.target.innerText;
    currentItem.text = newText;

    // if (newText !== "" || newText !== " " || newText !== null) {
    //   setTodos(allItems.map(item => {
    //     if (item.id === currentItem.id) {
    //       return {
    //         ...item,
    //         text: newText
    //       }
    //     }
    //     return item;
    //   }));
    // }
  }

  // edit todo button
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
    if (currentItem.isEditable === false) {
      alert("Editable mode on. Now you can edit selected one.");
      alert("make sure to turn it off after editing");
    } else {
      alert("Editable mode off");
    }

    // Explanation:-
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
