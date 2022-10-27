//5)Define object of Tsionet using class in JS, add the function Add Student and Delete Student.

let students: TsionetS[] = [];

class TsionetS {
  name: string;
  id: number;
  age: number;

  constructor(name: string, id: number, age: number) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
  addStudent() {
    students.push(this);
    console.log(students);
  }
  deleteStudent() {
    let index = students.indexOf(this);
    if (index != -1) {
      students.splice(index, 1);
    }
    console.log(students);
  }
}
let student1 = new TsionetS("Eli", 4546456, 23);
let student2 = new TsionetS("Hay", 654654, 31);

student1.addStudent();
student2.addStudent();
student1.deleteStudent();
