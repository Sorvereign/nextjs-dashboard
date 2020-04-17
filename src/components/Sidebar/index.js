import React from 'react';
import Link from 'next/link';

import { LogoutIcon, AnalyticsIcon, PagesIcon, UsersIcon } from '../Icon';
import { StyledSidebar, SidebarItem, BottomWrapper } from './styles';

const Sidebar = (small) => {
  return (
    <StyledSidebar small={small}>
      <Link href="/">
        <SidebarItem>
          <h1>Logo</h1>
        </SidebarItem>
      </Link>

      <Link href="">
        <SidebarItem>
          <AnalyticsIcon />
        </SidebarItem>
      </Link>

      <Link href="/prueba">
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
  small: true,
};

export default Sidebar;
