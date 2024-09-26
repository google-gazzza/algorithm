// [JS][7kyu] Exes and Ohs
// exes-and-ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

const XO = (str) => {
  let oCount = 0
  let xCount = 0
  for (const char of str) {
    if (char === 'o' || char === 'O') {
      oCount += 1
    } else if (char === 'x' || char === 'X') {
      xCount += 1
    }
  }

  return oCount === xCount
}

XO('ooxx')
XO('Ooxx')
XO('ooxXm')
XO('xooxx')
