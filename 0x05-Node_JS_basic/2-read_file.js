const fs = require('fs');
const readline = require('readline');

function countStudents(pathOfFile) {
  const records = {};
  let firstLine = true;

  // Check if file exists before creating the readline interface
  if (!fs.existsSync(pathOfFile) || !fs.statSync(pathOfFile).isFile()) {
    throw new Error('Cannot load the database');
  }

  const readfile = readline.createInterface({
    input: fs.createReadStream(pathOfFile),
    output: process.stdout,
    terminal: false,

  });

  readfile.on('line', (data) => {
    // Processing each line of data from the file
    if (firstLine || data.trim().length === 0) {
      firstLine = false;
      return; // Skip the first line if needed
    }

    const lineArray = data.split(',');
    const field = lineArray[lineArray.length - 1];

    if (!Object.keys(records).includes(field)) {
      records[field] = [lineArray[0]];
    } else {
      records[field].push(lineArray[0]);
    }
  });

  readfile.on('close', () => {
    const numberOfstudents = Object.values(records).reduce(
      (acc, curr) => acc + curr.length, 0,
    );
    console.log(`Number of students: ${numberOfstudents}`);
    Object.keys(records).forEach((key) => {
      const value = records[key];
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    });
  });
}

module.exports = countStudents;
