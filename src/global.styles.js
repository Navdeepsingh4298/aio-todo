import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    
    ${'' /* Selection */}
      ::selection {
        background-color: var(--yellow);
      }
  }
    html,body{

      margin: 0;
      padding: 0;

      /* colors */
      --white: #F7F9F8;
      --grey: #A8BADA;
      --yellow: #F6C72D;
      --light-yellow: #fff8a2;
      --light-black: #383838;
      --black: #000;

      
      ${'' /* Scroll bar */}
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--black);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--yellow);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #d4a83e;
        border-radius: 20px;
      }

      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      width: 100%;
      min-height: 100%;
      background: linear-gradient(45deg, #0c056d, #0dceda);
      color: var(--black);
    }
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70vw;
  min-height: 85vh;
  height: auto;
  margin: 2rem auto 0;
  border: 2px solid black;
  border-radius: 20px;
  background: var(--black);

  @media screen and (max-width: 800px){
    width: 90vw;
    min-height: 90vh;
    margin: 1rem auto;
  }
`;

