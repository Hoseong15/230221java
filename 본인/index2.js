const a = document.querySelector('h2');

a.addEventListener('mouseover', function(e) {
  e.target.style.color = 'red'
})
a.addEventListener('mouseout', function(e) {
  e.target.style.color = 'black'
})

a.oncontextmenu = function() {
  return false;
}


function changeColor() {
  const width = window.innerWidth;
  if (width > 1200) {
    a.style.color='blue'
  } else if (width >= 768 && width <= 1200) {
    a.style.color='green'
  } else {
    a.style.color='purple'
  }
}

window.addEventListener("resize", changeColor);