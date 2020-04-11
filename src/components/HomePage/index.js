import React from 'react';
import Wrapper from '../Wrapper';
import ProjectsLists from '../ProjectsList';
import ProjectStats from '../ProjectStats';

const HomePage = (firstName, stats) => {
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsStats firstName="firstName" stats="stats" />
      <ProjectsLists />
    </Wrapper>
  </Wrapper>;
};

export default HomePage;
