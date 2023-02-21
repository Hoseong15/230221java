const ages = [20, 28, 19, 56];
const newAges = [];

ages.forEach(function(age) {              
  newAges.push(age + 5);
});
// 익명함수



/////////////////////////////////

function increaseAgeBy5(age) {
  newAges.push(age + 5);
}
ages.forEach(increaseAgeBy5);

//////////////////////////////

ages.forEach((age)=> {                      
  newAges.push(age + 5);
})
// 애로우함수

// console.log(newAges)

////////////////////////////////

ages.forEach((age) => newAges.push(age + 5));

// console.log(newAges)



// ForEach문의 두번쨰 파라미터(인덱스)
const courses = ['B', 'M', 'C', 'P'];
 courses.forEach(function (course, index) {
//   console.log(index + ':' + course);
 })

// ForEach문의 세번째 파라미터(부모배열)
courses.forEach(function(course, index, array) {
//  console.log(courses)
})

/////////////////////////////////////////////

const students = [
  {firstName: 'John', lastName: 'Doe', 학비:5000}, 
  {firstName: 'Stephen', lastName: 'Matt', 학비:7000}, 
  {firstName: 'Abi', lastName: 'Susu', 학비:4000}, 
];
let sum = 0;

// 객체배열의 ForEach문
students.forEach( (student) =>{
  // console.log(student.firstName + " " + student.lastName)
})

students.forEach((student) => {
  sum += student.학비;
  //sum = sum + student.학비
})
// console.log(sum)


const students1 = [
  {name: 'John', courses:['Math', 'english', 'physics']},
  {name: 'Sarah', courses:['Chem', 'Math', 'computer']}
];
//ForEach문 안의 다른 ForEach문
students1.forEach((student)=> {
  console.log(student);
  student.courses.forEach( (c)=> {
    console.log(c)
  })
});
