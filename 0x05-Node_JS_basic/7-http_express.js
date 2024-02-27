/*
 * create a server using express
 */
const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      reject(new Error('Cannot load the database'));
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
      const results = [];

      removeHeading.forEach((val) => {
        const recordArray = val.split(',');
        const field = recordArray[recordArray.length - 1];

        if (!Object.keys(records).includes(field)) {
          records[field] = [recordArray[0]];
        } else {
          records[field].push(recordArray[0]);
        }
      });

      results.push(`Number of students: ${studentNo}`);
      Object.keys(records).forEach((key) => {
        const value = records[key];
        results.push(`Number of students in ${key}: ${
          value.length}. List: ${value.join(', ')}`);
      });
      resolve(results);
    });
  });
}


const DB = process.argv.length > 2 ? process.argv[2] : '';
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DB)
    .then((result) => {
      res.send(`This is the list of our students\n${result.join('\n')}`);
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(1245);

module.exports = app;
