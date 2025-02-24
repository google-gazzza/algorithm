// leetcode/easy/2727. Is Object Empty
// 2727-is-object-empty
// URL: https://leetcode.com/problems/interval-cancellation/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function isEmpty(obj: Record<string, any> | any[]): boolean {
  return Object.keys(obj).length === 0;
};

let obj = { "x": 5, "y": 42 };
console.log(isEmpty(obj));
// Output: false

let obj2 = {};
console.log(isEmpty(obj2));
// Output: true

let obj3 = [null, false, 0];
console.log(isEmpty(obj3));
// Output: false
