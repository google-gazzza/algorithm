// leetcode/easy/2794. Create Object from Two Arrays
// 2794-create-object-from-two-arrays
// URL: https://leetcode.com/problems/create-object-from-two-arrays/description/

function createObject(keysArr: any[], valuesArr: any[]): Record<string, any> {
  const result: Record<string, any> = {};

  for (let i = 0; i < keysArr.length; i += 1) {
    if (result[String(keysArr[i])] === undefined) {
      result[String(keysArr[i])] = valuesArr[i];
    }
  }

  return result;
}

let keysArr = ['a', 'b', 'c'];
let valuesArr = [1, 2, 3];
console.log(createObject(keysArr, valuesArr))
// Output: {"a": 1, "b": 2, "c": 3}

keysArr = ['1', 1, false];
valuesArr = [4, 5, 6];
console.log(createObject(keysArr, valuesArr))
// Output: {"1": 4, "false": 6}

keysArr = [];
valuesArr = [];
console.log(createObject(keysArr, valuesArr))
// Output: {}
