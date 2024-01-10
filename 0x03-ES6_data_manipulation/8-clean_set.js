/*
 * cleanSet -  a string of all the set values that start with a specific string
 * @param{Set}set - set of strings
 * @param(string} startString - string to search with
 * @return {string}
 */
export default function cleanSet(set, startString) {
  // creat an arrayi
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
