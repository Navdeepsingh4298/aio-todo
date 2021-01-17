import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70vw;
  height: 5rem;
  font-size: 1rem;
  letter-spacing: 1px;

  @media screen and (max-width: 800px){
    width: 100vw;
    height: 3.6rem;
    font-size: 0.8rem;
  }
`;

export const FooterPara = styled.p`
  color: var(--grey);
  margin: 0;
`;

export const FooterLink = styled.a`
  color: var(--grey);
`;