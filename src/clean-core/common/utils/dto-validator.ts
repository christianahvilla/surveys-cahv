/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-prototype-builtins */
export const validator = <T extends Object>(target: T, keys: Array<keyof T>) => {
  return keys.every((key) => target.hasOwnProperty(key));
};
