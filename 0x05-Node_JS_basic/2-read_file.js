const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
  const removeHeading = fileContent.slice(1);

  const studentNo = removeHeading.length;
  const records = {};

  removeHeading.forEach((val) => {
    const recordArray = val.split(',');
    const field = recordArray[recordArray.length - 1];

    if (!Object.keys(records).includes(field)) {
      records[field] = [recordArray[0]];
    } else {
      records[field].push(recordArray[0]);
    }
  });

  console.log(`Number of students: ${studentNo}`);
  Object.keys(records).forEach((key) => {
    const value = records[key];
    console.log(`Number of students in ${key}: ${
      value.length}. List: ${value.join(', ')}`);
  });
}

module.exports = countStudents;
