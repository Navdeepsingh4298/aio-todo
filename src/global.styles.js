import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
    html,body{

      margin: 0;
      padding: 0;

      /* colors */
      --white: #F7F9F8;
      --grey: #A8BADA;
      --yellow: #F6C72D;
      --brown: #958270;
      --voilet: #26264a;
      --light-yellow: #fff8a2;
      --light-black: #383838;
      --black: #000;

      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      width: 100%;
      min-height: 100%;
      background: linear-gradient(45deg, blue, red);
      color: black;
    }
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70vw;
  min-height: 85vh;
  height: auto;
  margin: 3rem auto 0;
  border: 2px solid black;
  border-radius: 20px;
  background: var(--black);

  @media screen and (max-width: 800px){
    width: 90vw;
    min-height: 90vh;
    margin: 1rem auto;
  }
`;

