const student={
    name: "Ananya",
    age: 20,
    branch: "CSE"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
const {name: NameStu,age,branch}=student;
console.log("Name=",NameStu);
console.log("Age=",age);
console.log("Branch=",branch);