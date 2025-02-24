// leetcode/medium/2776. Convert Callback Based Function to Promise Based Function
// 2776-convert-callback-based-function-to-promise-based-function
// URL: https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

type CallbackFn = (
  next: (data: number, error: string) => void,
  ...args: number[]
) => void;

type Promisified = (...args: number[]) => Promise<number>

function promisify(fn: CallbackFn): Promisified {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      fn((data: number, error: string) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }, ...args);
    });
  };
}

//
// var promisify = function (fn) {
//   return async function (...args) {
//
//
//   };
// };
