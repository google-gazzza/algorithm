// leetcode/easy/2804. Array Prototype ForEach
// 2804-array-prototype-foreach
// URL: https://leetcode.com/problems/array-prototype-foreach/

Array.prototype.forEach = function (callback: Function, context: any): void {
  for (let i = 0; i < this.length; i += 1) {
    callback.call(context, this[i], i, this);
  }
};
