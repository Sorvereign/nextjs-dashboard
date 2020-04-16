import React from 'react';

// import MenuAppBar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Wrapper from '../components/Wrapper';
import HomePageContainer from '../containers/HomePageContainer';

import Router from 'next/router';

const Main = () => {
  return (
    <Wrapper flex>
      <Sidebar />
      <HomePageContainer />
    </Wrapper>
  );
};

export default Main;
