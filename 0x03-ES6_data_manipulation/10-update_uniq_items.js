/*
 * updateUniqueItems  - updates a map
 * @param{map} data - a map containing number as values
 * @return {map} updated map
 */
export default function updateUniqueItems(data) {
  // updating the map
  if (data instanceof Map) {
    data.forEach((value, key) => {
      if (value === 1) data.set(key, 100);
    });
    return data;
  }
  // if not a map
  throw new Error('Cannot process');
}
