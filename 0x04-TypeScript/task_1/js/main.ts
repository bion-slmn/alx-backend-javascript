interface Teacher {
   readonly firstName: string; 
   readonly lastName: string;
   fullTimeEmployee: boolean;
   yearsOfExperience ?: number;
   location: string;
   [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
  }

  interface printTeacherFunction {
    (key: string, value: string) : string
  }

function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName[0]}.toUpperCase().${lastName}`
  }

  // an inteface for the class to implement
  interface student {
    firstName: string;
    lastName: string;

    workOnHomework(): string
    displayName(): string;
    }

//interface for constuctor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
  }
  
  
  class StudentClass implements student {
   firstName: string;
   lastName: string;

   constructor(firstName: string, lastName: string){
   this.firstName = firstName;
   this.lastName = lastName;
   }

   workOnHomeWork() return 'Currently working';

   displayName() return this.firstName;

 }
