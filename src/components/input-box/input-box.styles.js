import styled from 'styled-components';

export const InputBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 2.5rem;
  letter-spacing: 0.2rem;
  margin: 1rem auto;

  @media screen and (max-width: 800px){
    height: 6rem;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  padding: 20px;

  @media screen and (max-width: 800px){
    font-size: 0.8rem;
    height: 1.8rem;
    padding: 15px;
    margin-right: 5px;
  }
`;

export const SelectDropDown = styled.select`
  height: 2rem;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  margin-left: 10px;

  @media screen and (max-width: 800px){
    font-size: 0.8rem;
    height: 1.8rem;
  }
`;