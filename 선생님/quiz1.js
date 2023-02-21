var select = document.getElementById("mySelect");

select.addEventListener("change", function(e) {
  let p = document.querySelector('#selectedValue');
  p.innerHTML = this.value;
  console.dir(e.target)
})