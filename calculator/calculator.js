const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  if(array.length == 0) return 0;
  return array.reduce((a,b)=> a+b);
};

const multiply = function(array) {
  if(array.length == 0) return 0;
  return array.reduce((a,b)=> a*b);
};

const power = function(a, b) {
  let total = a;
	for(let i = 0; i < b-1; i++){
    total *= a
  }
  return total
};

const factorial = function(number) {
  let total = 1;
  for(let i = 1; i <= number; i++){
    total *= i;
  }
  return total;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
