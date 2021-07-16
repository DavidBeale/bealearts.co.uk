import { URL, pathToFileURL } from 'url';
import { transformAsync } from '@babel/core';

const baseURL = pathToFileURL(`${process.cwd()}/`).href;

const extensionsRegex = /\.jsx/;
const runtimeRegex = /static\/jsx-runtime/;

export function resolve(specifier, context, defaultResolve) {
  const { parentURL = baseURL } = context;

  if (extensionsRegex.test(specifier)) {
    return {
      url: new URL(specifier, parentURL).href
    };
  }

  if (runtimeRegex.test(specifier)) {
    return {
      url: new URL('./jsx-runtime.mjs', import.meta.url).href
    };
  }

  return defaultResolve(specifier, context, defaultResolve);
}

export function getFormat(url, context, defaultGetFormat) {
  if (extensionsRegex.test(url)) {
    return {
      format: 'module'
    };
  }

  return defaultGetFormat(url, context, defaultGetFormat);
}

export async function transformSource(source, context, defaultTransformSource) {
  const { url } = context;

  if (extensionsRegex.test(url)) {
    const { code } = await transformAsync(source);
    return {
      source: code
    };
  }

  return defaultTransformSource(source, context, defaultTransformSource);
}
