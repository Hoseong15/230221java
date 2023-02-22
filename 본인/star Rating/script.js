const stars = document.querySelectorAll(".stars i");

// function callback(e) {
//   stars.forEach((star, index2) => {
//     //console.log("바깥 index : " + index1 + ", 내부 index : " + index2);
//     e.target.id >= index2 ? star.classList.add("active") : star.classList.remove("active");
//   });
// }

stars.forEach((star, index1) => {
  console.log("Tag index : " + index1);
  console.log(star);
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      console.log("바깥 index : " + index1 + ", 내부 index : " + index2);
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});