import { style } from '../services/CssAggregationService.mjs';
import { getProjects } from '../services/GithubService.mjs';
import Project from './Project.jsx';

export default async function ProjectsList({ user }) {
  const styles = style(`
    {
      display: flex;
      flex-wrap: wrap;
      padding: 0px;

      & li {
        width: 50%;
        list-style: none;
      }

      @media only screen and (max-width: 500px) {
        & li {
          width: 100%;
        }
      }
    }
  `);

  const projects = await getProjects(user);
  return (
    <ul class={styles}>
      {
        projects.map((project) => <li key={project.name}><Project project={project} /></li>)
      }
    </ul>
  );
}
