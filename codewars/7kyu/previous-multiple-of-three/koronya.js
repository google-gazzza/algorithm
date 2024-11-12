// [JS][7kyu] Previous multiple of three
// previous-multiple-of-three
// https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript

const isValid = (n) => (n.split('').reduce((acc, cur) => acc + Number(cur), 0) % 3 === 0 ? true : false)

const prevMultOfThree = (n) => {
  let strN = String(n)
  while (strN.length > 0) {
    if (isValid(strN)) {
      return Number(strN)
    }
    strN = strN.slice(0, -1)
  }
  return null
}

prevMultOfThree(1)
prevMultOfThree(25)
prevMultOfThree(36)
prevMultOfThree(1244)
prevMultOfThree(952406)
