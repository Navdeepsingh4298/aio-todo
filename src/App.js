import React, { useState } from 'react';

//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
import Header from './components/header/header.component';
import InputBox from './components/input-box/input-box.component';
import ItemList from './components/items-list/item-list.component';
import Footer from './components/footer/footer.component';

// styled global component
import { GlobalStyle, AppContainer } from './global.styles';

const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <AppContainer>

        <GlobalStyle />
        <Header
          title="AIO TO-DO"
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
      <Footer />
    </>
  );
}

export default App;
