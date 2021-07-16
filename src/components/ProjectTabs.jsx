import { style } from '../services/CssAggregationService.mjs';

export default function ProjectTabs({ children }) {
  const styles = style(`
    {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2px;
    }

    input {
      position: absolute;
      opacity: 0;
    }

    input + label + section {
      display: none;
      width: 100%;
      order: 99;
      padding: 0;
      margin: 0;
    }

    input:checked + label + section {
      display: block;
    }

    input:checked + label {
      background: linear-gradient(to bottom, #035096 0%, #2C75FF 100%);
      color: #EEE;
      cursor: default;
      pointer-events: none;
    }

    input:focus-visible + label {
      outline: -webkit-focus-ring-color auto 1px;
    }
  `);

  return (
    <div class={styles}>
      {children}
    </div>
  );
}
