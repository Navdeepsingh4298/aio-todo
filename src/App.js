import React, { useState } from 'react';

// Components
import Header from './components/header/header.component';
import InputBox from './components/input-box/input-box.component';
import ItemList from './components/items-list/item-list.component';

// styled global component
import { GlobalStyle, AppContainer } from './global.styles';

const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <AppContainer>

      <GlobalStyle />
      <Header
        title="TO DO"
      />

      <InputBox
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />

      <ItemList
        items={todos}
        setTodos={setTodos}
      />

    </AppContainer >
  );
}

export default App;
