import styled, { css } from 'styled-components';

const CenterStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  ${CenterStyles}
  margin-top: 0;
  min-width: 40vw;
  margin: 1rem auto;
  height: 5rem;
  background: var(--yellow);
  border-radius: 20px;

  @media screen and (max-width: 800px){
   height: 3.5rem;
   width: 50vw;
   margin: 0.5rem auto;
  }
`;

export const HeaderTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;

  @media screen and (max-width: 800px){
    font-size: 2rem;
  }
`;