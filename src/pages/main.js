import React from 'reeact';

import MenuAppBar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Wrapper from '../components/Wrapper';
import HomePageContainer from '../containers/HomePageContainer';

import Router from 'next/router';

const Main = () => {
  return (
    <Wrapper flex>
      <Sidebar></Sidebar>
      <HomePageContainer></HomePageContainer>
    </Wrapper>
  );
};

export default Main;
