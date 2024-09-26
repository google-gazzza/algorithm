// leetcode/easy/2822. Inversion of Object
// 2822-inversion-of-object
// URL: https://leetcode.com/problems/inversion-of-object/

function invertObject(obj: Record<any, any>): Record<any, any> {
  return Object(
    Array.from(Object.entries(obj))
      .reduce((acc, [key, value]) => {
        if (acc[value] === undefined) {
          acc[value] = key;
        } else {
          acc[value] = Array.isArray(acc[value]) ? [...acc[value], key] : [acc[value], key];
        }

        return acc;
      }, {}),
  );
};

obj = { "a": "1", "b": "2", "c": "3", "d": "4" };
console.log(invertObject(obj));
// Output: invertedObj = {"1": "a", "2": "b", "3": "c", "4": "d"}
