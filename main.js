// alert("Hello World");

// console.log("Hello World");
// console.error("this is an error");
// console.warn("this is a warning");

// var, let, const

// let age = 30;
// age = 31;
// console.log(age);

// const score = 30;
// console.log(score);

// String,Nubers,Boolean,null,undefined
// const name = "John";
// const age = 68;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof z);

// const name = "John";
// const age = 68;
// // Concatinataion

// console.log("My name is " + name + " and I am " + age);
// //Template String

// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// String functions

// const s = "Hello World";
// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split("l"));

// Arrays-variables that hold multiple vlaues

// const fruits = ["apples", "oranges", "pears"];
// fruits[3] = "grapes";

// fruits.push("mangos");
// fruits.unshift("straberries");
// fruits.shift();
// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray("Hello"));
// console.log(fruits.indexOf("oranges"));
// console.log(fruits[0]);
// console.log(fruits[0].toUpperCase());

// object literals
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// // alert(person);
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.street);

// const {
//   firstName,
//   lastName,
//   address: { city, street, state },
// } = person;
// console.log(city);

// person.email = "john@gmail.com";
// console.log(person);

// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isComplete: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isComplete: true,
//   },
//   {
//     id: 3,
//     text: "Dentist appt",
//     isComplete: false,
//   },
// ];
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//for
// for (let i = 0; i <= 10; i++) {
//   console.log(`For loop Number: ${i}`);
// }

//while
// let i = 0;
// while (i < 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);

//   console.log(`For loop Number: ${todos[i].text}`);
// }

// for (let todo of todos) {
//   console.log(todo.isComplete);
// }

// forEach,map,filter

// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoText);

// const todoComplete = todos
//   .filter(function (todo) {
//     return todo.isComplete === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoComplete);

// const x = 4;
// const y = 10;
// if (x > 5 || y > 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// const color = "green";
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is Not red or blue");
//     break;
// }

// const addNums = (num1, num2) => num1 + num2;

// console.log(addNums(5, 5));

// Constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function () {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//}

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

//Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person1.dob);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getBirthYear());

// Class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getBirthYear());

//Single element

// const form = document.getElementById("my-form");
// console.log(form);
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("#my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("h1"));

//Multiple element

// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// // btn.style.background = "red";
// btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   //   console.log(e.target.id);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`),
    );
    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
