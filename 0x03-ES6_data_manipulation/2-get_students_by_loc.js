/*
 * getStudentsByLocation - select objects who are located in a specific city.
 * @param {array} data - array of all objects
 * @param {string} city - the city to filter object with
 * @ return {array} ojbject that are in that city
 */
export default function getStudentsByLocation(data, city) {
  return data.filter((obj) => obj.location === city);
}
