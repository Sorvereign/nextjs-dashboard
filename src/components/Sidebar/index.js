import React from 'react';
import Link from 'next/link';
// import LogoSmall from '@components/LogoSmall'
import { LogoutIcon, AnalyticsIcon, PagesIcon, UsersIcon } from '../Icon';
// import LanguageSwitcher from '@components/LanguageSwitcher'
import { StyledSidebar, SidebarItem, BottomWrapper } from './styles';

const Sidebar = (small) => {
  return (
    <StyledSidebar small={small}>
      <Link href="/">
        <SidebarItem>
          <h1> Logo </h1>
        </SidebarItem>
      </Link>

      <Link href="">
        <SidebarItem>
          <AnalyticsIcon />
        </SidebarItem>
      </Link>

      <Link href="">
        <SidebarItem>
          <PagesIcon />
        </SidebarItem>
      </Link>

      <Link href="">
        <SidebarItem>
          <UsersIcon />
        </SidebarItem>
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
