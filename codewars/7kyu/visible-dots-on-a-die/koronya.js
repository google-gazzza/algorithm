// [JS][7kyu] Visible Dots On a Die
// visible-dots-on-a-die
// https://www.codewars.com/kata/5a39724945ddce2223000800/train/javascript

const totalAmountVisible = (topNum, numOfSides) => {
  const total = (numOfSides * (numOfSides + 1)) / 2
  const hidden = numOfSides + 1 - topNum
  return total - hidden
}

totalAmountVisible(3, 6) === 17
totalAmountVisible(3, 8) === 30
totalAmountVisible(1, 12) === 66
