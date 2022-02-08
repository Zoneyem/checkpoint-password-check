"use-strict";
let show = document.querySelector(".showPassword");
let hide = document.querySelector(".hidePassword");
let passwortOne = document.querySelector("#passOne");
let passwortTwo = document.querySelector("#passTwo");
let input = document.querySelector("input");
const pattern = input.pattern;
value1 = [""];

value2 = [""];
let equal = document.querySelector(".equalPass");
let sufficientPass = document.querySelector(".SufficientPass");
const form = document.querySelector("form");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let capitalLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let smallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const showP = function () {
  show.setAttribute("class", "hidePassword");
  hide.setAttribute("class", "showPassword");
  passwortOne.type = Text;
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

const equalPasswords = function () {
  let value1 = document.querySelector("#passOne").value;
  let value2 = document.querySelector("#passTwo").value;

  if (value1 !== value2) {
    equal.innerHTML = "Passwords are not equal ❌";
  } else {
    equal.innerHTML = "Passwords are equal ✅";
  }

  numbers.forEach((number) => {
    if (value1.includes(number) || value2.includes(number)) {
      const cN = document.querySelector(".containNumbers");
      cN.innerHTML = "Contains Numbers ✅";
    }
  });

  capitalLetters.forEach((capitalLetter) => {
    if (value1.includes(capitalLetter) || value2.includes(capitalLetter)) {
      const cL = document.querySelector(".capitalLet");
      cL.innerHTML = "Upper Case Letters ✅";
    }
  });
  smallLetters.forEach((smallLetter) => {
    if (value1.includes(smallLetter) || value2.includes(smallLetter)) {
      const sL = document.querySelector(".smallLet");
      sL.innerHTML = "Lower Case Letters ✅";
    }
  });

  if (value1.length >= 10 || value2.length >= 10) {
    sufficientPass.innerHTML = "At least 10 characters long ✅";
  }
};

form.addEventListener("keyup", equalPasswords);
