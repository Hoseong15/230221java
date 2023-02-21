const ages = [20, 28, 19, 56];
const newAges = [];

// ages.forEach(function (age) { //익명함수
//   newAges.push(age + 5);
// });

// function increaseAgeBy5(age) {
//   newAges.push(age + 5);
// }
// ages.forEach(increaseAgeBy5);

ages.forEach((age) => { //Arrow function
  newAges.push(age + 5);
});

ages.forEach((age) => newAges.push(age + 5));

//console.log(newAges);

// ForEach문의 두번째 파라미터(인덱스)
const courses = ['B', 'M', 'C', 'P'];
courses.forEach(function (course, index) {
  //console.log(index + ': ' + course);
})

// ForEach문의 세번째 파라미터(원본 배열)
courses.forEach(function (course, index, array) {
  //console.log(array);
})

// const students = [{
//     firstName: 'John',
//     lastName: 'Doe',
//     학비: 5000
//   },
//   {
//     firstName: 'Stephen',
//     lastName: 'Matt',
//     학비: 7500
//   },
//   {
//     firstName: 'Abi',
//     lastName: 'Susu',
//     학비: 6000
//   }
// ];

// //객체배열의 forEach문
// students.forEach((student) => {
//   console.log(student.firstName + " " + student.lastName);
// });

// let sum = 0;

// students.forEach((student) => {
//   sum += student.학비;
//   //sum = sum + student.학비;
// })

// console.log(sum);

const students = [{
    name: 'John',
    courses: ['Math', 'English', 'Physics']
  },
  {
    name: 'Sarah',
    courses: ['Chem', 'Math', 'Computer']
  }
];

//ForEach문 안의 다른 ForEach문
students.forEach((student) => {
  // console.log(student);
  student.courses.forEach((c) => {
    // console.log(c);
  })
})


// nested object 객체속에 있는 객체
const 학생 = {
  name: 'John',
  age: 20,
  marks: {
    science: 70,
    math: 75
  }
}

//console.log(학생.marks.math);

// 객체속의 함수
const person = {
  name: 'Sam',
  age: 30,
  greet: function () {
    //console.log('hello')
  }
}
// 객체안에 있는 함수 호출
person.greet();
person.height = 187;
//console.log(person.height);

//빈 객체에 멤버를 따로 구성해도 됨.
let people = {};
people.name = 'John';
people.greet = function () {
  //console.log('hello');
}
people.greet();

//Constructor  생성자
//LOL의 영웅들 만들기 = 객체
//Life, Attack, Shield, Speed, 특수능력

// Constructor function 생성자 함수
function Hero() {
  this.name = 'Hero',
    this.age = 23,
    this.speed = 10,
    this.life = 50
}
//사용법
const azir = new Hero();
azir.name = 'Azir';
console.log(azir.name + ' ' + azir.life);

function 영웅(name, age, speed, life) {
  this.name = name,
    this.age = age,
    this.speed = speed,
    this.life = life
}
const 이즈리얼 = new 영웅('이즈리얼', 20, 12, 30);
const 바루스 = new 영웅('바루스', 40, 8, 35);

바루스.특수능력 = "꿰뚫는화살";
console.log(이즈리얼);
console.log(바루스);

//new 는 키워드. new로 생성하면 새로운 메모리영역을 가진다
// let obj = {
//   name: 'Sam'
// }
// let a = obj; //new로 만들지 않음에 주의
// a.name = 'Tom';
//let obj = new Object();
let obj = {};
console.log(obj);

function Person() {
  this.name = 'John',
    this.age = 23
}
let person1 = new Person();
let person2 = new Person();

Person.prototype.gender = 'Male';
//Person.gender = 'Male';

console.log(person1);
console.log(person2);