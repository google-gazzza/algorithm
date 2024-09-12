// [JS][7kyu] Difference Of Squares
// difference-of-squares
// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

const getSum = (n) => (n * (n + 1)) / 2
const getSumSquare = (n) => getSum(n) ** 2
const getSquareSum = (n) => (n * (n + 1) * (2 * n + 1)) / 6
const differenceOfSquares = (n) => getSumSquare(n) - getSquareSum(n)

differenceOfSquares(5) === 170
differenceOfSquares(10) === 2640
differenceOfSquares(100) === 25164150
