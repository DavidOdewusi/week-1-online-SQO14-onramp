function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += Number(arr[i]);
  return sum;
}
console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix([1, "5", 6, 7]));
console.log(sumMix([10, 60, "80", 10]));
console.log(sumMix(["1", 2, 3, "9", 10]));
console.log(sumMix(["5", 6, "7"]));
module.exports = sumMix;
