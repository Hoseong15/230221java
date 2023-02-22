const student = {
  firstName: 'Monica',
  //Getter
  get heroName() {
    return this.firstName;
  },
  //Setter
  set changeName(newName) {
    this.firstName = newName;
  }
}

//console.log(student.getName()); //error
// console.log(student.heroName);
//student.changeName('Amy'); //error
student.changeName = 'Amy';
// console.log(student.heroName);

student.heroName = 'Tom'; // getter로는 값을 변경할 수 없음
// console.log(student.heroName); // 'Amy'

const arr = new Array();
// console.log(typeof arr);
arr.push(1);
arr.push(2);
console.log(arr);

const obj = new Object();
//console.log(typeof obj);
obj.name = 'Smith';
obj.age = 20;
//obj .1 =1; // 일반객체 object의 키값은 문자열이어야함
// console.log(obj);


const map1 = new Map();
map1.set('A', '1');
map1.set('B', '2');
map1.set('C', '3');
// console.log(typeof map1);
// console.log(map1);
// console.log(map1.size);
// console.log(map1.get('A'));
map1.set('A', 100);
// console.log(map1.get('A'));
map1.delete('B')
// console.log(map1)


// 2차원배열
const arr2 = [
  ['name', 'smith'],
  ['age', '20'],
  ['height', '180']
];
const map2 = new Map(arr2);
console.log(map2)

const arr3 = [
  ['name', 'Smith'],
  ['adress', 'aaaaa'],
  ['zipCode', '12345']
];
const arr4 = [
  ['name', 'Tom'],
  ['adress', 'bbbb'],
  ['zipCode', '12345']
];
// Map의 유일성
const merged = new Map([...arr2, ...arr3, ...arr4]);
console.log(merged)

// 다양한 데이터타입을 키값으로 가질 수 있음
const myMap = new Map();
const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

myMap.set(keyString, 'this is string')
myMap.set(keyObj, 'this is object');
myMap.set(keyFunc, 'this is function');

console.log(myMap)


// Map의 ForEach
console.log(merged);
merged.forEach((value, key) => {
  console.log(key, ": " + value);
})
console.log(obj['name']);



// set
// 단일구조
// 데이터타입(자료형)과 무관
// 유일한 값을 가진다

const obj = {}
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add('some text');
mySet.add(obj);
console.log(mySet)