import React from 'react';
import Wrapper from '../Wrapper';
import ProjectStats from '../ProjectsStats';
import Button from './Button';

const HomePage = (firstName, stats) => {
  return (
    <Wrapper flex>
      <Wrapper center width="regular" mTop="large">
        <ProjectStats />
        <Button />
      </Wrapper>
    </Wrapper>
  );
};

export default HomePage;
