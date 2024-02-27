/*
 * prompt a user for a name and
 * displays a message if a a user ends a program
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// listen to data
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
