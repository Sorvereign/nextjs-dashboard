import React from 'react';
import Wrapper from '../Wrapper';
import ProjectStats from '../ProjectsStats';
import ProjectsList from '../ProjectsList';

const HomePage = (firstName, stats) => {
  return (
    <Wrapper flex>
      <Wrapper center width="regular" mTop="large">
        <ProjectStats />
      </Wrapper>
    </Wrapper>
  );
};

export default HomePage;
