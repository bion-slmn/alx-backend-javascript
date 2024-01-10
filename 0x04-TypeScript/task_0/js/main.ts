interface Student {
 firstName: string;
 lastName: string;
 age: number;
 location: string
 }

 // creating two variables
let s1 : Student = {firstName: 'bee', lastName: 'sol', age: 23, location: 'Kigali'};
let s2 : Student = {firstName: 'bin', lastName: 'solom', age: 22, location: 'nairobi'};

let studentsList: Student[] = [s1, s2];

let tableBody = document.querySelector('#studentTable tbody');

studentsList.forEach(obj => {
	// creating a row
  let row = tableBody.insertRow(0);

  // creating cells
  let fname = row.insertCell(0);
  let lname = row.insertCell(1);

  // adding content to cells
  fname.textContent = obj.firstName;
  lname.textContent = obj.location;
});
