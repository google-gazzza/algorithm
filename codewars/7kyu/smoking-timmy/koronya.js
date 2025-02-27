// [JS][7kyu] Smoking Timmy
// smoking-timmy
// https://www.codewars.com/kata/5a0aae48ba2a14cfa600016d/train/javascript

const startSmoking = (bars, boxes) => {
  const totalBox = bars * 10 + boxes
  const totalCigarettes = totalBox * 18
  let result = totalCigarettes
  let remain = totalCigarettes
  while (remain >= 5) {
    const exchange = Math.floor(remain / 5)
    result += exchange
    remain -= exchange * 4
  }

  return result
}

// startSmoking(0, 1) === 22
// startSmoking(1, 0) === 224
// startSmoking(1, 1) === 247
// startSmoking(10, 2) === 2294
