const reverseString = function (str) {
  let reverseChars = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverseChars += str[i];
  }
  return reverseChars;
};

// Do not edit below this line
module.exports = reverseString;
