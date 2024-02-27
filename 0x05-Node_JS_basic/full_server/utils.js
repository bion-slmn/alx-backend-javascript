/*
* read data from a a file async
*/
/*
 * create a server using express
 */
const express = require('express');
const fs = require('fs');

const app = express();

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      const lines = data.trim().split('\n');
      const removeHeading = lines.slice(1);
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

      resolve(records);
    });
  });
}

module.exports = readDatabase;
