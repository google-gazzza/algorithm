// [JS][6kyu] Stern-Brocot Sequence Part I
// stern-brocot-sequence-part-i
// https://www.codewars.com/kata/59986011d85bdd7fd7000621/train/javascript

const sequenceArr = [1, 1]

const sternBrocot = (n) => {
  let findIndex = sequenceArr.findIndex((x) => x === n)
  while (findIndex === -1) {
    const sequenceArrLength = sequenceArr.length
    const dd = sequenceArrLength / 2
    const [a, b] = [sequenceArr[dd - 1], sequenceArr[dd]]
    sequenceArr.push(a + b, b)
    findIndex = sequenceArr.findIndex((x) => x === n)
  }
  return findIndex
}

sternBrocot(2) === 2
sternBrocot(3) === 4
sternBrocot(10) === 38
sternBrocot(8) === 20
sternBrocot(19) === 82
