// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// [JS][8kyu] Fake Binary
// fake-binary

const fakeBin = (x) => {
  return x
    .split("")
    .reduce((acc, cur) => (Number(cur) < 5 ? acc + "0" : acc + "1"), "");
};

fakeBin("45385593107843568") === "01011110001100111";
fakeBin("509321967506747") === "101000111101101";
fakeBin("366058562030849490134388085") === "011011110000101010000011011";
