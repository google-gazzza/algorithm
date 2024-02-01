// CamelCase Method
// https://www.codewars.com/kata/587731fda577b3d1b0001196/

String.prototype.camelCase = function () {
  return this.split(' ')
    .map((v) => v ? v[0].toUpperCase() + v.slice(1) : "")
    .join('');
};

console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
