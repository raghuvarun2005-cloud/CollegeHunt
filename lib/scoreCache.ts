declare global {

  var scoreCache:
    Record<string, unknown>;

}

globalThis.scoreCache =
  globalThis.scoreCache || {};

export const scoreCache =
  globalThis.scoreCache;