import { style } from '../services/CssAggregationService.mjs';

export default function Header() {
  const styles = style(`
    {
      height: 360px;
      padding-top: 50px;
      background: #035096;
      background: linear-gradient(to bottom, #035096 0%, #2C75FF 100%);
      color: #EEE;
      text-align: center;
      font: 3em "Helvetica Neue", Helvetica, sans-serif;

      & p {
        margin-top: 0px;
        margin-bottom: 20px;
      }
    }
  `);

  return (
    <header class={styles}>
      <img src="images/logo.png" alt="BealeARTS" width="343" height="159" />
      <p>Information Ingenuity</p>
      <a href="http://uk.linkedin.com/in/davidbeale" target="_blank" rel="noopener noreferrer">
        <img src="images/linkedin-badge.png" width="161" height="35" border="0" alt="View David Beale's profile on LinkedIn" />
      </a>
    </header>
  );
}
