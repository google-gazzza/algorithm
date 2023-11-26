// [JS][7kyu] Sum of integers in string
// sum-of-integers-in-string
// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

const sumOfIntegersInString = (s) =>
  s
    .split(/[^0-9]/)
    .filter((item) => item !== '')
    .reduce((acc, cur) => acc + Number(cur), 0)

sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') === 3635
