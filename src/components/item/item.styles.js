import styled,{css} from 'styled-components';

const centeredStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

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

export const ItemTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 75%;
  border-bottom: 1px solid black;
`;

export const ArrowContainer = styled.span`
  ${centeredStyles};
  cursor: pointer;
`;

export const TextLiContainer = styled.li`
  list-style-type: none;
`;

export const BtnContainer = styled.div`
  ${centeredStyles};
  height: 3rem;
  width: 25%;

  @media screen and (max-width:800px){
    height: 2rem;
  }
`;
