// [JS][7kyu] Sum The Array
// sum-the-array
// https://www.codewars.com/kata/56bdf9d50d0b6433df001074/train/javascript

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0)
}
