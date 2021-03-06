import React from 'react';

// Unique id for items
import { v4 as uuidv4 } from 'uuid';

// component
import Button from '../button/button.component';

// styled component
import { InputBoxContainer, Input, SelectDropDown } from './input-box.styles';

const InputBox = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const handleTextChange = e => {
    setInputText(e.target.value)
  }

  const handleStatus = e => {
    setStatus(e.target.value);
  }

  const handleAddBtnClick = e => {
    e.preventDefault();
    if (inputText !== '') {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          text: inputText,
          isCompleted: false,
          isEditable: false
        }
      ]);
      setInputText('');
    }
    else {
      alert("Type something to Add");
    }
  }

  // if someone press enter key 
  const checkEnterKey = e => {
    e.keyCode === 13 && handleAddBtnClick(e);
  }

  return (
    <InputBoxContainer>
      <Input
        autoFocus
        type='text'
        value={inputText}
        onChange={handleTextChange}
        onKeyUp={checkEnterKey}
        placeholder='Type Here'
      />
      <Button
        btnName="&#10010;"
        handleClick={handleAddBtnClick}
      />
      <SelectDropDown
        onChange={handleStatus}
      >
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </SelectDropDown>
    </InputBoxContainer>
  )
}

export default InputBox;