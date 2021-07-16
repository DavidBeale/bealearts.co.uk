import { style } from '../services/CssAggregationService.mjs';

export default function Menu() {
  const styles = style(`
    {
      height: 60px;
      background: #222;
      background: linear-gradient(to bottom, #222 0%, #333 100%);
      font-size: 1.4em;

      & ul {
        margin: 0px;
        padding: 0px;
        margin-left: auto;
        margin-right: auto;
        width: 95%;
        max-width: 1024px;
        list-style: none;

        & li {
          float: left;
          vertical-align: middle;
          margin-right: 20px;
          line-height: 60px;

          & a {
            color: #DDD;
            text-decoration: none;
          }

          & a:hover, & a.current {
            color: #FFF;
          }

          & a.current {
            cursor: default;
          }
        }
      }
    }
  `);

  return (
    <nav class={styles}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
      </ul>
    </nav>
  );
}
