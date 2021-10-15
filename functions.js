// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function sayHello(name) {
  if (name === 'Will') {
    return `No more testing ${name}!`
  }

  return `Hi there ${name}!`;
}

function buildCar(color, type) {
  var car = {
    color: color,
    type: type
  }

  if (color === undefined && type === undefined) {
    return car = {};
  }

  return car;
}

module.exports = {
  addTwoNumbers,
  sayHello,
  buildCar
}