// leetcode/medium/2797. Partial Function with Placeholders
// 2797-partial-function-with-placeholders
// URL: https://leetcode.com/problems/partial-function-with-placeholders/

function partial(fn: Function, args: any[]): Function {
  return function (...restArgs) {
    return fn(...args.map((arg) => {
      if (arg === '_') {
        return restArgs.shift();
      }
      return arg;
    }).concat(restArgs));
  };
};


let fn = (...args) => args;
let args = [2, 4, 6];
let restArgs = [8, 10];
// Output: [2,4,6,8,10]
console.log(partial(fn, args)(...restArgs));
//?

fn = (...args) => args;
args = [1, 2, "_", 4, "_", 6];
restArgs = [3, 5];
// Output: [1,2,3,4,5,6]
console.log(partial(fn, args)(...restArgs));

fn = (a, b, c) => b + a - c;
args = ["_", 5];
restArgs = [5, 20];
console.log(partial(fn, args)(...restArgs));
