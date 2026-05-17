// [JS][7kyu] Number of Folds
// number-of-folds
// https://www.codewars.com/kata/59cfe5b023daccfd07000048/train/javascript

const numberOfFolds = (n) => {
  let result = 0
  while (n > 1) {
    n /= 2
    result += 1
  }
  return result
}

numberOfFolds(8) === 3
numberOfFolds(1) === 0
numberOfFolds(2) === 1
