import React from 'react';

import { HeaderContainer, HeaderTitle } from './header.styles';

const Header = ({ title }) => (
  <HeaderContainer>
    <HeaderTitle>
      {title}
    </HeaderTitle>
  </HeaderContainer>
)
export default Header;
