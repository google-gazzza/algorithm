// [JS][7kyu] Two numbers are positive
// two-numbers-are-positive
// https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript

const twoArePositive = (a, b, c) => [a, b, c].filter((item) => item > 0).length === 2

twoArePositive(2, 4, -3) === true
twoArePositive(-4, 6, 8) === true
twoArePositive(4, -6, 9) === true
twoArePositive(4, 6, 0) === true
twoArePositive(-4, 6, 0) === false
twoArePositive(4, 6, 10) === false
twoArePositive(-14, -3, -4) === false
