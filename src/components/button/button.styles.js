import styled from 'styled-components';

export const BtnContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background: var(--yellow);
  color: var(--black);
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 5px;
  border-radius: 5px;
  border: none;

  @media screen and (max-width: 800px){
    height: 2rem;
    width: 2rem;
    margin: 0 2.5px;
  }

  &:hover{
    background: var(--black);
    color: var(--yellow);
    cursor: pointer;
    border: 1px solid var(--yellow);
  }
  
`;
