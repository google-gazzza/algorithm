// [JS][8kyu] No zeros for heros
// no-zeros-for-heros
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

const noBoringZeros = (n) => {
  const numString = String(n)
  const numStringLength = numString.length
  let validIndexOfZero = -1
  for (let i = numStringLength - 1; i >= 0; i -= 1) {
    const item = numString[i]
    if (item !== '0') {
      break
    }
    validIndexOfZero = i
  }

  return validIndexOfZero < 0 ? Number(numString) : Number(numString.slice(0, validIndexOfZero))
}

noBoringZeros(-105)
// noBoringZeros(10450)
// noBoringZeros(104500)
// noBoringZeros(10004300)
// noBoringZeros(1000430000)

// noBoringZeros(1450)
// noBoringZeros(-1050)
// noBoringZeros(1450) === 145
// noBoringZeros(960000) === 96
// noBoringZeros(1050) === 105
noBoringZeros(-1050) === -105
noBoringZeros(-105) === -105
// noBoringZeros(0) === 0
