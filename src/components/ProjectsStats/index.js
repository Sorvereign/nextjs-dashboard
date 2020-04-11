import React from 'react';
import Wrapper from '../Wrapper';
import Text from '../Text';
import StatBlock from '../StatBlock';
import { Texts, StatsWrapper } from './styles';

/*type Props = {
  firstName: string,
  stats: Stats,
};
*/

const ProjectsStats = (firstName, stats) => (
  <Wrapper mBottom="xlarge">
    <Wrapper padding="large">
      <Texts>
        <Text size="large">
          <h1 id="projects.hello" values={{ name: firstName }} />
        </Text>
        <Text color="semiDark">
          <h1 id="projects.stats-intro" />
        </Text>
      </Texts>
    </Wrapper>

    <StatsWrapper>
      <StatBlock>
        <Text size="huge">{stats.projectsCount}</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.projects" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.completePercentage}%</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.translation-complete" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.localesCount}</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.locales" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.newKeysCount}</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.new-keys" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.missingTranslationsCount}</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.missing-translations" />
        </Text>
      </StatBlock>
    </StatsWrapper>
  </Wrapper>
);

export default ProjectsStats;
