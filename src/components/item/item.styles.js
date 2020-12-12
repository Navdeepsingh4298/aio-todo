import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Caveat', cursive;
  font-size: 2rem;
  width: 100%;
  height: 2rem;
  margin: 1rem auto;

  @media screen and (max-width: 800px){
    font-size: 1.5rem;
  }
`;