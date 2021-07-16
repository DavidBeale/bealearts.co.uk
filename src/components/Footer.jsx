import { style } from '../services/CssAggregationService.mjs';

export default function Footer() {
  const styles = style(`
    {
      height: 2.5rem;
      width: 100%;
      background: #222;
      color: #BBB;

      & p {
        padding-top: 10px;
        margin-left: auto;
        margin-right: auto;
        width: 95%;
        max-width: 1024px;

        & i {
          float: right;
          font-style: normal;
        }
      }
    }
  `);

  const year = (new Date()).toISOString().substr(0, 4);

  return (
    <footer class={styles}>
      <p>
        Copyright &copy; 2016-
        {year}
        , David Beale
      </p>
    </footer>
  );
}
