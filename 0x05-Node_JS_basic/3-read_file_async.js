const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      throw new Error('Cannot load the database');
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.trim().split('\n');
      const removeHeading = lines.slice(1);

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
      resolve();
    });
  });
}

module.exports = countStudents;
