// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// [JS][7kyu] Categorize New Member
// categorize-new-member

const openOrSenior = (data) =>
  data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]) === ["Open", "Senior", "Open", "Senior"];
openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [53, 23],
]) === ["Open", "Open", "Open", "Open"];
openOrSenior([
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
]) === ["Senior", "Open", "Open", "Open"];
