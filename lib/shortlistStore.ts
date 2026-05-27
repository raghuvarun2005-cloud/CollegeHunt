declare global {

  var shortlistStore:
    Record<string, string[]>;

}

globalThis.shortlistStore =
  globalThis.shortlistStore || {};

export const shortlistStore =
  globalThis.shortlistStore;