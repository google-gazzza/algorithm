// [JS][7kyu] Averages of numbers
// averages-of-numbers
// https://www.codewars.com/kata/57d2807295497e652b000139

const averages = (numbers) => {
  if (!numbers || numbers.length === 0 || numbers.length === 1) {
    return []
  }
  const numbersLen = numbers.length
  const resultArr = []
  let prev = numbers[0]
  for (let i = 1; i < numbersLen; i += 1 || 0) {
    resultArr.push((prev + numbers[i]) / 2)
    prev = numbers[i]
  }

  return resultArr
}
