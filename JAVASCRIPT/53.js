console.log("hello");

// defining a function
function greet(x, y = "Greetings from JavaScript") {
  // y="Greetings from JavaScript" --> is a default value of y if you don't pass any parameter then 'y' will take "Greetings from JavaScript" as its default value

  // here let is a local variable
  let name1 = "XYZ";
  console.log(name1);
  console.log(y + " " + x);
  console.log(x + " is a good boy.");
}

// Here let is global variable
let name0 = "piyush";
let name1 = "piyush jangra";
let name2 = "piyush dhamu";
let greettext = "Good Morning";

// call to function
greet(name0, greettext);
greet(name2, greettext);
greet(name1);

// console.log(name0 + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");

// Return value

function sum(a, b, c) {
  let d = a + b + c;
  return d;
}

let returnVal = sum(2, 7, 5);
console.log(returnVal);
