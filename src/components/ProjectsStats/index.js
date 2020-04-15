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
          <h1 id="projects.hello" values={{ name: firstName }}>
            ¡Hola Almer!
          </h1>
        </Text>
        <Text color="semiDark">
          <h1 id="projects.stats-intro">Estadísticas sobre tus proyectos</h1>
        </Text>
      </Texts>
    </Wrapper>

    <StatsWrapper>
      <StatBlock>
        <Text size="huge">5</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.projects">Páginas</h1>
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">3</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.translation-complete">Publicidades</h1>
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">6</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.locales">Usuarios</h1>
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">1</Text>
        <Text size="regular" color="semiDark">
          <h1 id="projects.stats.new-keys">Clientes</h1>
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
