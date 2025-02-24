// [JS][7kyu] The wheat/rice and chessboard problem
// the-wheat-rice-and-chessboard-problem
// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript

// const squaresNeeded = (grains) => Math.floor(Math.log2(grains + 1))
const squaresNeeded = (grains) => Math.ceil(Math.log2(grains + 1))

squaresNeeded(0) === 0
squaresNeeded(1) === 1
squaresNeeded(2) === 2
squaresNeeded(3) === 2
squaresNeeded(4) === 3
