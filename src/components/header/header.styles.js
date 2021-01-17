import styled, { css } from 'styled-components';

const CenterStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  ${CenterStyles}
  width: auto;
  padding: 2em;
  margin: 1rem auto;
  height: 5rem;
  background: var(--yellow);
  border-radius: 20px;

  @media screen and (max-width: 800px){
   height: 3.3rem;
   margin: 0.5rem auto;
   padding: 1.5em;
  }
`;

export const HeaderTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;

  @media screen and (max-width: 800px){
    font-size: 2.3rem;
  }
`;