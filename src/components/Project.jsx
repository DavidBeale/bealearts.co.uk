import { style } from '../services/CssAggregationService.mjs';

import getLanguageIcon from '../utils/getLanguageIcon.mjs';

export default function Project({ project }) {
  const styles = style(`
    {
      &:hover {
        & dl {
          background-color: #2F2F2F;

          & h3 {
            color: #FFF;
            text-decoration: underline;
          }
        }
      }

      & dl {
        margin: 10px;
        padding: 10px;
        min-height: 100px;
        background-color: #2A2A2A;
        color: #DDD;

        & dd {
          margin: 0px;
        }

        & dt {
          & h3 {
            margin-top: 0px;
            margin-bottom: 10px;
            font-weight: normal;
            font-size: 1.3em;

            & img {
              vertical-align: middle;
              margin-right: 10px;
            }
          }
        }
      }
    }
  `);

  const language = project.language || 'Unknown';

  return (
    <a class={styles} href={project.url} target="_blank" rel="noopener noreferrer">
      <dl>
        <dt>
          <h3>
            <img width="26" height="26" src={getLanguageIcon(language)} alt={language} />
            {project.name}
          </h3>
        </dt>
        <dd>{project.description}</dd>
      </dl>
    </a>
  );
}
