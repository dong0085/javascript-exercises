const repeatString = function (string, n) {
  let str = "";

  if (n < 0) {
    return "ERROR";
  } else if (string == "") {
    return "";
  }

  for (i = 0; i < n; i++) {
    str += string;
  }
  return str;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
