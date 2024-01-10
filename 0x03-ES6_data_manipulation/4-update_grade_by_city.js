/*
 * updateStudentGradeByCity -update an object with city and grade
 * @param {array} data - a list of student objects
 * @param {string} city - use to select objet that maatch that city
 * @param {array} newgrade - is an array of object in format
 *   {
 *     studentId: 31,
 *         grade: 78,
 *   }
 * @return {array} list of student who from that city and their grades added
 */
export default function updateStudentGradeByCity(data, city, newGrades) {
  // filter by city
  const arr = data.filter((obj) => obj.location === city);

  // fil
  // adding grades to the object accoding to id
  return arr.map((obj) => {
    const matchingId = newGrades.find((val) => val.studentId === obj.id);
    if (matchingId) {
      return { ...obj, grade: matchingId.grade };
    }
    return { ...obj, grade: 'N/A' };
  });
}
