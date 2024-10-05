const sumAll = function (num1, num2) {
  if (
    Number.isInteger(num1) &&
    Number.isInteger(num2) &&
    num1 > -1 &&
    num2 > -1 &&
    num1 < num2
  ) {
    let sum = 0;
    for (let i = num1, target = num2; i <= target; i++) {
      sum += i;
    }
    return sum;
  } else if (
    Number.isInteger(num1) &&
    Number.isInteger(num2) &&
    num1 > -1 &&
    num2 > -1 &&
    num1 > num2
  ) {
    let sum = 0;
    for (let i = num2, target = num1; i <= target; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
