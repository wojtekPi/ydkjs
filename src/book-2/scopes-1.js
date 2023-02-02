console.log("Hello from scopes!");

students = [
  { name: "Ala", id: 7 },
  { name: "Bob", id: 17 },
  { name: "Eva", id: 27 },
];

a = 7;

let students2;

const f = () => {
  // students = [{ name: "Ala-2", id: 5 },]
  students2 = students
  for (const student of students2) {
    console.log(`Student: ${student.name}`);
  }
};
f();
console.log(students2)
console.log("Goodbye from scopes!");
