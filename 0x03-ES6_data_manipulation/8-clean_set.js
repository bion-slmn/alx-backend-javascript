/*
 * cleanSet -  a string of all the set values that start with a specific string
 * @param{Set}set - set of strings
 * @param(string} startString - string to search with
 * @return {string}
 */
export default function cleanSet(set, startString) {
  // creat an arrayi
  if (startString === '') return '';
  const arr = Array.from(set);
  const startArr = arr.filter((str) => str.startsWith(startString));

  if (startArr.lenght !== 0) {
    const results = startArr.map((str) => str.slice(startString.length));
    return results.join('-');
  }
  return '';
}
