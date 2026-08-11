// [JS][7kyu] More than one way to call a function, or skin a cat.
// more-than-one-way-to-call-a-function-or-skin-a-cat
// https://www.codewars.com/kata/547aadd5b84a1fd66800041e/train/javascript

const sum = (a, b) => (b != null ? a + b : (value) => sum(a, value))

sum(2, 3) === 5
sum(2)(3) === 5
