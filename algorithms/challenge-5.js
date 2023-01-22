function filterList(arr) {
  let filteredList = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") filteredList.push(arr[i]);
    else continue;
  }
  return filteredList;
}
console.log(filterList([1, 2, "a", "b"]));
module.exports = filterList;
