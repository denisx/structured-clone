import { Cloneable, Serialized } from "./internal.js";

/**
 * Returns an array of serialized Records.
 * @param value - a serializable value.
 * @param options -  an object with a `lossy` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 */
export function serialize(
  value: Cloneable,
  options?: { lossy?: boolean; json?: boolean }
): Serialized[];
