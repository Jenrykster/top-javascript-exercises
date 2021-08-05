const ftoc = function(tempF) {
  let result = (tempF - 32) * 5/9;
  result = Math.round(result * 10) / 10; //Rounds to one decimal 
  return result;
};

const ctof = function(tempC) {
  let result = tempC * 9/5 + 32;
  result = Math.round(result * 10) / 10; //Rounds to one decimal 
  return result;
};

module.exports = {
  ftoc,
  ctof
};
