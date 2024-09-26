// [JS][7kyu] Count the Digit
// count-the-digit
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

const nbDig = (n, d) => {
  let count = 0
  for (let i = 0; i <= n; i += 1 || 0) {
    count += String(i * i)
      .split('')
      .filter((str) => Number(str) === d).length
  }

  return count
}

nbDig(5750, 0)
nbDig(5750, 0) === 4700
nbDig(10, 1)
