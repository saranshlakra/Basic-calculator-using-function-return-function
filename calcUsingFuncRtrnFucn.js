//---------calculator using function returning function--------------
function calculator(addsub) {
  if (addsub === "addition") {
    return function (a, b) {
      console.log(a + b);
    };
  } else if (addsub === "subtraction") {
    return function (a, b) {
      console.log(a - b);
    };
  } else if (addsub === "multiply") {
    return function (a, b) {
      console.log(a * b);
    };
  } else if (addsub === "divide") {
    return function (a, b) {
      console.log(a / b);
    };
  } else {
    return function () {
      console.log("What calculation you want");
    };
  }
}

calculator("addition")(25, 20);
calculator("subtraction")(25, 20);
calculator("multiply")(25, 20);
calculator("divide")(25, 20);
calculator("ksdkhf")(25, 20);

//or

calculator(prompt("Write addition or subtraction or multiply or divide"))(
  Number(prompt("write your values")),
  Number(prompt("next value"))
); // direct user inputs
