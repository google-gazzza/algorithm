// [JS][6kyu] Sums of Parts
// sums-of-parts
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

const partsSums = (ls) => {
  let accSum = ls.reduce((acc, cur) => acc + cur, 0)
  const resultArr = []
  ls.forEach((num) => {
    resultArr.push(accSum)
    accSum -= num
  })
  resultArr.push(0)

  return resultArr
}

partsSums([])
partsSums([0, 1, 3, 6, 10])
partsSums([1, 2, 3, 4, 5, 6])
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
