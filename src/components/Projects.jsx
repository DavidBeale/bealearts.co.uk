import { style } from '../services/CssAggregationService.mjs';
import ProjectsList from './ProjectsList.jsx';
import ProjectTabs from './ProjectTabs.jsx';
import ProjectTab from './ProjectTab.jsx';

export default function Projects() {
  const styles = style(`
    {
      min-height: 400px;
    }
  `);

  return (
    <section class={styles}>
      <h2 id="projects">Projects</h2>
      <ProjectTabs>
        <ProjectTab label="Professional" index={1}>
          <ProjectsList user="bealearts" />
        </ProjectTab>
        <ProjectTab label="Personal" index={2}>
          <ProjectsList user="davidbeale" />
        </ProjectTab>
      </ProjectTabs>
    </section>
  );
}
