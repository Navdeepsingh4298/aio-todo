import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70vw;
  height: 5rem;
  margin: 10px;
  letter-spacing: 1px;
  

  @media screen and (max-width: 800px){
    width: 90vw;
  }
`;

export const FooterPara = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #eee;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #eee;
`;