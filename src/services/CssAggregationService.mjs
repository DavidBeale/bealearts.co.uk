import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';
import prefixKeyframes from 'postcss-prefixer-keyframes';
import prefixSelector from 'postcss-prefix-selector';
import shortid from 'shortid';
import { createHash } from 'crypto';

import { getContextItem, setContextItem } from '../../bin/context.mjs';

const cssDefinitionsSymbol = Symbol('cssDefinitions');
const cssHashesSymbol = Symbol('cssHashes');

export function aggregate() {
  return getDefinitions().join('');
}

export function style(css) {
  const hash = createHash('md5').update(css).digest('hex');
  const uid = getHashes()[hash];
  if (uid) {
    return uid;
  }

  return append(css, hash);
}


function append(css, hash) {
  const uid = `_${shortid.generate()}`;
  getDefinitions().push(encapsulate(css, uid));
  getHashes()[hash] = uid;

  return uid;
}

function getDefinitions() {
  let definitions = getContextItem(cssDefinitionsSymbol);

  if (!definitions) {
    definitions = [];
    setContextItem(cssDefinitionsSymbol, definitions);
  }

  return definitions;
}

function getHashes() {
  let hashes = getContextItem(cssHashesSymbol);

  if (!hashes) {
    hashes = {};
    setContextItem(cssHashesSymbol, hashes);
  }

  return hashes;
}

function encapsulate(css, uid) {
  return postcss([
    postcssNesting(),
    prefixSelector({
      prefix: `.${uid}`,
      exclude: ['@-webkit-keyframes'],
      transform
    }),
    prefixKeyframes({
      prefix: `${uid}-`
    })
  ])
  .process(css)
  .css;
}

function transform(prefix, selector, prefixedSelector) {
  if (selector[0] === ':') {
    return prefix + selector;
  }

  if (selector.startsWith('global ')) {
    return selector.replace('global ', '');
  }

  return prefixedSelector;
}
