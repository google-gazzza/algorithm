// [JS][7kyu] Round up to the next multiple of 5
// round-up-to-the-next-multiple-of-5
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

const roundToNext5 = (n) => {
  const remainder = n % 5
  if (remainder === 0) {
    return n
  }
  const quota = Math.floor(n / 5)
  return (quota + 1) * 5
}

roundToNext5(0)
roundToNext5(5)
roundToNext5(-5)

roundToNext5(2)

roundToNext5(12)
roundToNext5(-2)
