import {
  executionAsyncResource,
  createHook
} from 'async_hooks';

const contextSymbol = Symbol('context');

export function init() {
  createHook({
    init(asyncId, type, triggerAsyncId, resource) {
      const cr = executionAsyncResource();
      if (cr) {
        resource[contextSymbol] = cr[contextSymbol];
      }
    }
  }).enable();

  executionAsyncResource()[contextSymbol] = {};
}

export function getContextItem(key) {
  return executionAsyncResource()[contextSymbol][key];
}

export function setContextItem(key, value) {
  executionAsyncResource()[contextSymbol][key] = value;
}
