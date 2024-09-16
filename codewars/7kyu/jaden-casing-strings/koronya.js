// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// [JS][7kyu] Jaden Casing Strings
// jaden-casing-strings

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
    .join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase() === "How Can Mirrors Be Real If Our Eyes Aren't Real";
