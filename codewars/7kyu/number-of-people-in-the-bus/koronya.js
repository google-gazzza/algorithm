// [JS][7kyu] Number of People in the Bus
// number-of-people-in-the-bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

const number = (busStops) =>
  busStops.reduce((acc, cur) => acc + cur[0] - cur[1], 0);

number([
  [10, 0],
  [3, 5],
  [5, 8],
]) === 5;
number([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]) === 17;
number([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]) === 21;
number([[0, 0]]) === 0;
