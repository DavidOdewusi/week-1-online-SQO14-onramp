function countTruthy(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) count++; // Adds one to count in the case where arr[i] is true
  }
  return count;
}
console.log(countTruthy([6, 3, 0, 30, 7]));
console.log(countTruthy(["", 3, 0, 30, 7]));
console.log(countTruthy(["", 0, 0, undefined, 7]));
console.log(countTruthy([16, 33, 3, 2]));
console.log(countTruthy([16, 33, null, 2]));
module.exports = countTruthy;
