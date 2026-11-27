// [JS][7kyu] Shadok's way to count
// shadok-s-way-to-count
// https://www.codewars.com/kata/6b00d45ad1103df1762bded3/train/javascript

const getMatchedString = (num) => {
  switch (num) {
    case 0:
      return 'GA'
    case 1:
      return 'BU'
    case 2:
      return 'ZO'
    case 3:
      return 'MEU'
    default:
      break
  }
}

const shadok = (n) => {
  const arr = []
  while (n >= 4) {
    arr.push(n % 4)
    n = Math.floor(n / 4)
  }
  arr.push(n)

  return arr
    .reverse()
    .map((num) => getMatchedString(num))
    .join('')
}

shadok(7)
shadok(33)
shadok(356)
