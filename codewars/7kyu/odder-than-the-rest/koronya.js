// [JS][7kyu] Odder Than the Rest
// odder-than-the-rest
// https://www.codewars.com/kata/5983cba828b2f1fd55000114/train/javascript

const oddOne = (arr) => arr.findIndex((item) => item % 2 !== 0)

oddOne([2, 4, 6, 7, 10]) === 3
oddOne([2, 16, 98, 10, 13, 78]) === 4
oddOne([4, -8, 98, -12, -7, 90, 100]) === 4
oddOne([2, 4, 6, 8]) === -1
