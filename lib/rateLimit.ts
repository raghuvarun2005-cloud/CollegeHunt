declare global {

  var rateLimitStore:
    Record<
      string,
      number[]
    >;

}

globalThis.rateLimitStore =
  globalThis.rateLimitStore || {};

export const rateLimitStore =
  globalThis.rateLimitStore;
  