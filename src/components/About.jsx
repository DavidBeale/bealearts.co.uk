import { style } from '../services/CssAggregationService.mjs';

export default function Header() {
  const styles = style(`
    #profile {
      float: left;
      margin-right: 20px;

      & img {
        border-radius: 50%;
        margin: 0px;
        padding: 0px;
        display: block;
      }

      & #avatar {
        display: none;
        top: -150px;
      }
    }

    #profile:hover {
      & #profile-picture {
        display: none;
      }

      & #avatar {
        display: inline;
        top: 0px;
      }
    }
  `);

  return (
    <section class={styles}>
      <h2 id="about">About</h2>
      <div id="profile">
        <img src="images/david-beale.jpg" id="profile-picture" width="150" height="150" alt="Profile of David Beale" title="David Beale" />
        <img src="images/avatar.png" id="avatar" width="150" height="150" alt="Avatar of David Beale" title="David Beale" />
      </div>
      <p>
        Highly motivated, creative and versatile hands on Technical Lead and U.I.
        Architect with over 10 years commercial experience with all major Web Technologies
        and System Architectures.
      </p>
      <p>
        MEng in Information Systems Engineering.
      </p>
      <p>
        Highly skilled at architecture and development of complex, highly usable and quality
        tested Web Applications and Systems within customer driven projects.
      </p>
    </section>
  );
}
