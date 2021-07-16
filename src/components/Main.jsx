import { style } from '../services/CssAggregationService.mjs';
import Menu from './Menu.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';

export default function Main() {
  const styles = style(`
    .content {
      min-height: 95%;
    }

    article {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 1024px;

      & section {
        padding: 20px;
        margin: 30px 0px 30px 0px;
        font-size: 1.1em;
        background: #282828;
        background: linear-gradient(to bottom, #222 0%, #282828 100%);

        & h2 {
          font: 1.5em "Helvetica Neue", Helvetica, sans-serif;
          margin-top: 0px;

          & a {
            color: inherit;
          }

          & a:hover {
            color: inherit;
          }
        }

        & a {
          color: #2370B6;
          text-decoration: none;
        }

        & a:hover {
          color: #2C75FF;
        }
      }
    }
  `);

  return (
    <main class={styles}>
      <div class="content">
        <Menu />
        <Header />

        <article>
          <About />
          <Projects />
        </article>
      </div>

      <Footer />
    </main>
  );
}
