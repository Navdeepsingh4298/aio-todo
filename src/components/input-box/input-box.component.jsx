import React from 'react';

// REDUX
//import { connect } from 'react-redux';
//import { addItem } from '../../redux/item-list/item-list.actions';


// Unique id for items
import { v4 as uuidv4 } from 'uuid';

// component
import Button from '../button/button.component';

// styled component
import { InputBoxContainer, Input } from './input-box.styles';

const InputBox = ({ inputText, setInputText, todos, setTodos }) => {

  const handleTextChange = e => {
    setInputText(e.target.value)
  }

  const handleAddBtnClick = e => {
    e.preventDefault();
    if (inputText !== '') {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: uuidv4()
        }
      ]);
      setInputText('');
    }
    else {
      alert("Type something to add");
    }
  }

  // if someone press enter key after typing
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
        placeholder='Click to type here'
      />
      <Button
        btnName='+'
        handleClick={handleAddBtnClick}
      />
    </InputBoxContainer>

  )
}

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// })


// export default connect(null, mapDispatchToProps)(InputBox); 

export default InputBox;