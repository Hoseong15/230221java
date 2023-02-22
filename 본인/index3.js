const student = {
  firstName: 'Monica',
  //Getter
  get getName() {
    return this.firstName;
  }
}
// console.log(student.getName());  // error
console.log(student.getName);