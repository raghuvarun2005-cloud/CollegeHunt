declare global {

  var scoreCache:
    Record<string, any>;

}

globalThis.scoreCache =
  globalThis.scoreCache || {};

export const scoreCache =
  globalThis.scoreCache;