// [JS][7kyu] Width-Height Ratio
// width-height-ratio
// https://www.codewars.com/kata/55486cb94c9d3251560000ff/train/javascript

const getGcd = (a, b) => {
  if (a === 0) {
    return b
  }
  return getGcd(b % a, a)
}

const calculateRatio = (w, h) => {
  if (w === 0 || h === 0) {
    throw new Error('Width and height must be greater than 0')
  }

  const divisor = getGcd(w, h)
  return `${w / divisor}:${h / divisor}`
}

const results1 = calculateRatio(1024, 768)
const results2 = calculateRatio(1920, 1080)