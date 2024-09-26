// leetcode/medium/2754. Bind Function to Context
// 2754-bind-function-to-context
// URL: https://leetcode.com/problems/bind-function-to-context/description/

type Fn = (...args) => any;

declare global {
  interface Function {
    bindPolyfill(obj: Record<any, any>): Fn;
  }
}

Function.prototype.bindPolyfill = function (obj) {
  return (...args) => {
    return this.apply(obj, args);
  };
};

// fn = function f(multiplier) {
//   return this.x * multiplier;
// };
//
// const boundFunc = fn.bindPolyfill({ "x": 10 });
// boundFunc(5); // 50

fn = function speak() {
  return "My name is " + this.name;
};
// obj = {"name": "Kathy"}
const boundFunc = fn.bindPolyfill({ "name": "Kathy" });
boundFunc(); // "My name is Kathy"
