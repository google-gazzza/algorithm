// [JS][7kyu] Bingo ( Or Not )
// bingo-or-not
// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript

const bingo = (a) => {
  const BINGO_ARR = [2, 9, 14, 7, 15]
  return BINGO_ARR.every((e) => a.includes(e)) ? 'WIN' : 'LOSE'
}

bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 'LOSE'
bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]) === 'WIN'
bingo([2, 2, 2, 2, 2, 2, 2]) === 'LOSE'
