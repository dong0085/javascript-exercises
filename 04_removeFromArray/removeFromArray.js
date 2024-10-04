// const removeFromArray = function (arr, ...args) {
//   // create array copy
//   let arrCopy = Array.from(arr);

//   // loop through the input array of items to delete from arrCopy
//   for (const arg of args) {
//     // if the element from argsCopy is in arrCopy
//     // locate and delete the element
//     while (arrCopy.includes(arg)) {
//       arrCopy.splice(arrCopy.indexOf(arg), 1);
//     }
//   }

//   return arrCopy;
// };

const removeFromArray2 = function (arr, ...args) {
  // create array copy
  let arrCopy = Array.from(arr);
  let argsCopy = Array.from(args);
  // console.log(arrCopy, argsCopy);

  return arrCopy.filter(function (num) {
    // returns true for number NOT included in argsCopy
    return !argsCopy.includes(num);
  });
};

//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// const sample = [1, 2, 3, 4];
// console.time("pt1");
// console.log(removeFromArray([1, 2, 3, 4], 1, 2));
// console.timeEnd("pt1");

console.time("pt2");
console.log(removeFromArray2([1, 2, 3, 4], 1, 2));
console.timeEnd("pt2");
// Do not edit below this line
module.exports = removeFromArray;
