export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  // joining the  array [[], []] into one [] array
  return arr.reduce((acc, val) => acc.concat(val), []);
}
