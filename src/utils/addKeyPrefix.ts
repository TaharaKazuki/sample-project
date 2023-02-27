export type PrefixAddedKeys<Prefix extends string, Keys extends Record<string, unknown>> = {
  [Key in keyof Keys]: Key extends string
    ? Keys[Key] extends string
      ? `${Prefix}${Capitalize<Key>}`
      : Keys[Key] extends Record<string, unknown>
      ? PrefixAddedKeys<`${Prefix}${Capitalize<Key>}`, Keys[Key]>
      : never
    : never;
};

export const addKeyPrefix = <Prefix extends string, Keys extends Record<string, unknown>>(
  prefix: Prefix,
  keys: Keys
): PrefixAddedKeys<Prefix, Keys> => {
  return Object.fromEntries(
    Object.entries(keys).map(([key, value]) => {
      const capitalKey = `${key.charAt(0)}${key.slice(1)}`;
      if (typeof value === 'string') {
        return [key, `${prefix}/${capitalKey}`];
      } else {
        return [key, addKeyPrefix(`${prefix}${capitalKey}`, value as Record<string, unknown>)];
      }
    })
  );
};
