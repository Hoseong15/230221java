var a = document.getElementById('myButton1');
var b = document.getElementById('myButton2');
var c = document.getElementById('myButton3');
let p = document.getElementById('output');


a.addEventListener("click", function() {
  p.innerHTML = 'Button 1 was checked'
})

b.addEventListener("click", function() {
  p.innerHTML = 'Button 2 was checked'
})

c.addEventListener("click", function() {
  p.innerHTML = 'Button 3 was checked'
})


//ForEach문으로 

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    output.innerHTML = 'Button ' + (index + 1) + ' was clicked.';
  })
})
