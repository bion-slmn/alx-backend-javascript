import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;

    readDatabase(process.argv[2])
      .then((results) => {
        const first = ['This is the list of our students'];
        const sorted = Object.keys(results).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        sorted.forEach((key) => {
          const value = results[key];
          first.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        });
        response.send(first.join('\n'));
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((results) => {
        const records = `List: ${results[major].join(', ')}`;
        response.send(records);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
