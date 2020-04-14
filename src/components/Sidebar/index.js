import React from 'react';
import Link from 'next/link';
// import LogoSmall from '@components/LogoSmall'
import { LogoutIcon } from '../Icon';
// import LanguageSwitcher from '@components/LanguageSwitcher'
import { StyledSidebar, BottomWrapper } from './styles';

const Sidebar = (small) => {
  return (
    <StyledSidebar small={small}>
      <Link href="/">
        <a>
          <h1> Logo </h1>
        </a>
      </Link>

      <BottomWrapper>
        <a href="/logout">
          <LogoutIcon />
        </a>
      </BottomWrapper>
    </StyledSidebar>
  );
};

Sidebar.defaultProps = {
  small: false,
};

export default Sidebar;
