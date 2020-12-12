import styled from 'styled-components';

export const InputBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 2.5rem;
  letter-spacing: 0.2rem;
  margin: 1rem auto;

  @media screen and (max-width: 800px){
    height: 2rem;
    width: 95%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;

  @media screen and (max-width: 800px){
    font-size: 1rem;
  }
`;