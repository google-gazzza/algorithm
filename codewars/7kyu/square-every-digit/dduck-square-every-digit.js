// square-every-digit
// Square Every Digit
// difficulty: 7kyu
// https://www.codewars.com/kata/546e2562b03326a88e000020
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/square-every-digit

const squareDigits = (num) => Number(
  [...String(num)]
    .map((v) => Number(v) ** 2)
    .join('')
);


console.log(squareDigits(9119), 811181);
