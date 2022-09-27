let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountainsFront = document.getElementById("mountains_front");
let mountainsBack = document.getElementById("mountains_behind");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountainsBack.style.top = value * 0.5 + "px";
  mountainsFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.65 + "px";
});
