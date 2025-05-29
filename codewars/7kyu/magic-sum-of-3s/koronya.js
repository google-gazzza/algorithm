// [JS][7kyu] Magic Sum of 3s
// magic-sum-of-3s
// https://www.codewars.com/kata/57193a349906afdf67000f50/train/javascript

const magicSum = (numbers) => numbers.filter((num) => num % 2 === 1 && String(num).includes('3')).reduce((acc, cur) => acc + cur, 0)

magicSum([3]) === 3
magicSum([3, 13]) === 16
magicSum([30, 34, 330]) === 0
magicSum([3, 12, 5, 8, 30, 13]) === 16
magicSum([]) === 0
