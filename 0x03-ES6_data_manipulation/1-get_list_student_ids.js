/*
 * getListStudentIds - return array of id from a lisat of objects
 * @param {array} data - array of objects that have ids
 * @return {array} array if ids
 */
export default function getListStudentIds(data) {
  if (!Array.isArray(data)) return [];
  return data.map((obj) => obj.id);
}
