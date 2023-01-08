type Arguments<K extends keyof any, V> = {
  list?: Record<K, V> | null | undefined;
  key: K;
};

export const verifyNullUndefKeyFromObject = <K extends keyof any, V>({
  list,
  key,
}: Arguments<K, V>): boolean => {
  if (list) return list[key] !== null || list[key] !== undefined;

  return false;
};
