// [JS][7kyu] Dee, The Generous Tipper
// dee-the-generous-tipper
// https://www.codewars.com/kata/568c3498e48a0231d200001f/train/javascript

const getRoundedTen = (num) => {
  if (num > 10) {
    return Math.round(num / 10) * 10
  }

  return num >= 5 ? 10 : num
}

const calcTip = (p, r) => {
  const price = getRoundedTen(p)
  let tip = Math.floor(price / 10)
  if (r === 1) {
    tip += 1
  } else if (r === 0) {
    tip -= 1
  } else {
    tip = Math.floor(tip / 2) - 1
  }
  return tip < 0 ? 0 : tip
}

calcTip(4, 1) === 1
calcTip(4, 0) === 0
calcTip(4, -1) === 0
calcTip(5, 1) === 2
calcTip(5, 0) === 0
calcTip(5, -1) === 0
calcTip(14, 1) === 2
calcTip(14, 0) === 0
calcTip(15, 1) === 3
calcTip(15, 0) === 1
calcTip(24, 1) === 3
calcTip(24, 0) === 1
