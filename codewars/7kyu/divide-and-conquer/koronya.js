// [JS][7kyu] Divide and Conquer
// divide-and-conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

const divCon = (x) => x.reduce((acc, curr) => (Number.isInteger(curr) ? acc + curr : acc - Number(curr)), 0)

divCon([9, 3, '7', '3']) === 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) === 14
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) === 13
