import React from 'react';

// Components
import Header from './components/header/header.component';
import InputBox from './components/input-box/input-box.component';
import ItemList from './components/items-list/item-list.component';

// styled global component
import { GlobalStyle, AppContainer } from './global.styles';

const App = () => (
  <AppContainer>
    <GlobalStyle />
    <Header
      title="TO DO"
    />
    <InputBox />

    <ItemList />

  </AppContainer>
);

export default App;
