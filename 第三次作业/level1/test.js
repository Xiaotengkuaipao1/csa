const course = {
  name: "CSA",
  semester: 2
};

const {name,isStudent=true} = course;
let year = course.semester;
console.log(name);
console.log(year);
console.log(isStudent);