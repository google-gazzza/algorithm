// leetcode/easy/2821. Delay the Resolution of Each Promise
// 2821-delay-the-resolution-of-each-promise
// URL: https://leetcode.com/problems/delay-the-resolution-of-each-promise/

function delayAll(functions: Function[], ms: number): Function[] {
  return functions.map((fn) => {
    return () => new Promise((resolve) => {
      setTimeout(() => {
        return resolve(fn());
      }, ms);
    });
  });
}

let functions = [
    () => new Promise((resolve) => setTimeout(resolve, 30))
  ],
  let;
ms = 50;

functions = [
  () => new Promise((resolve) => setTimeout(resolve, 50)),
  () => new Promise((resolve) => setTimeout(resolve, 80))
],
  ms = 70;
Output: [120, 150];
