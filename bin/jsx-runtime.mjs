import { paramCase } from 'param-case';

export async function jsx(comp, props, key) {
  if (typeof comp === 'function') {
    return comp(props);
  }

  const { children = [], ...attributes } = props;
  const childArray = await Promise.all(Array.isArray(children) ? children : [children]);

  if (Object.keys(attributes)?.length) {
    const attributesList = Object.entries(attributes)
      .filter(
        ([, value]) => value
      )
      .map(
        ([attr, value]) => `${paramCase(attr)}="${value}"`
      )
      .join(' ');
    return `<${comp} ${attributesList}>${childArray.join('')}</${comp}>`;
  }

  return `<${comp}>${childArray.join('')}</${comp}>`;
}

export const jsxs = jsx;

export async function Fragment({ children = [] }) {
  const childArray = await Promise.all(Array.isArray(children) ? children : [children]);
  return childArray.join('');
}
