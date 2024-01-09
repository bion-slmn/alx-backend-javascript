export const weakMap = new WeakMap();

export function queryAPI(obj) {
  // set obje as akey and the number of calls value
  const count = (weakMap.get(obj) + 1) || 1;

  if (count >= 5) throw new Error('Endpoint load is high');
  weakMap.set(obj, count);
}
