import { style } from '../services/CssAggregationService.mjs';

export default function ProjectTab({ label, index, children }) {
  const styles = style(`
    {
      width: 100px;
      height: 30px;
      border-radius: 0px;
      cursor: pointer;
      border: none;
      font-size: 0.8em;
      background: linear-gradient(to bottom, #888 0%, #CCC 100%);
      color: #333;
      text-align: center;
      line-height: 200%;

      &:hover {
        background: linear-gradient(to bottom, #035096 0%, #2C75FF 100%);
        color: #EEE;
      }

      &:nth-child(2) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &:nth-child(5) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  `);

  return (
    <>
      <input name="tabs" type="radio" id={`tab-${index}`} checked={index === 1} />
      <label class={styles} for={`tab-${index}`}>{label}</label>
      <section>
        {children}
      </section>
    </>
  );
}
