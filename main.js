"use-strict";
let show = document.querySelector(".showPassword");
let hide = document.querySelector(".hidePassword");
let passwortOne = document.querySelector("#passOne")
let passwortTwo = document.querySelector("#passTwo")
let input = document.querySelector("input");
value1 = document.querySelector("#passOne").value
value1=""

value2 = document.querySelector("#passTwo").value
value2 = "";
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const showP = function () {
  show.setAttribute("class", "hidePassword");
  hide.setAttribute("class", "showPassword");
  passwortOne.type=Text
  passwortTwo.type = Text;
};
show.addEventListener("click", showP);

const hideP = function () {
  show.setAttribute("class", "showPassword");
  hide.setAttribute("class", "hidePassword");
  passwortOne.type = "password";
  passwortTwo.type = "password";
};
hide.addEventListener("click", hideP);
