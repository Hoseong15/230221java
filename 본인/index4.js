// set
// 단일구조
// 데이터타입(자료형)과 무관
// 유일한 값을 가진다

const obj = {a:1, b:2}
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add('some text');
mySet.add(obj);
console.log(mySet)
console.log(mySet.has(1))
console.log(mySet.has(5))
console.log(mySet.has('SOME TEXT'.toLowerCase()))
console.log(mySet.size)

// Set의 ForEach문
mySet.forEach((value)=>{
  console.log(value)
})

// JSON (JavaScript Object Notation)

const user = {
  name: 'Smith',
  age: '27',
  job: 'Developer',
  email: 'test@naver.com'
}
const json1 = JSON.stringify(user);
console.log(json1);

const user2 = JSON.stringify(json1);
console.log(user2)