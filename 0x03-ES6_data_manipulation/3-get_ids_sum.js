/*
 * getStudentIdsSum -  get the sum of all ids of objects
 * @param{array} data list of student objects
 * @return {number} summ of ids
 */
export default function getStudentIdsSum(data) {
  return data.reduce((acc, val) => val.id + acc, 0);
}
