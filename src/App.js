import React, { useEffect, useState } from 'react';

// Components
import Header from './components/header/header.component';
import InputBox from './components/input-box/input-box.component';
import ItemList from './components/items-list/item-list.component';
import Footer from './components/footer/footer.component';

// styled global component
import { GlobalStyle, AppContainer } from './global.styles';

const App = () => {

  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  //run once when app starts
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  // it runs below two functions only when todos and status changes
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.isCompleted === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.isCompleted === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    const saveToLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    filterHandler();
    saveToLocalStorage();
  }, [todos, status]);


  // Save to Local Storage
  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <Header
          title="To do's List"
        />

        <InputBox
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
        />

        <ItemList
          items={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />

      </AppContainer >
      <Footer />
    </>
  );
}

export default App;
