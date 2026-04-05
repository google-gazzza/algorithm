// [JS][7kyu] Vampire Numbers
// vampire-numbers
// https://www.codewars.com/kata/54d418bd099d650fa000032d/train/javascript

const getResult = (numArr) => {
  const minusCount = numArr.filter((num) => num < 0).length
  if (minusCount > 0 && minusCount % 2 === 0) {
    return false
  }
  const resultMap = new Map()
  numArr
    .map((num) =>
      String(num)
        .split('')
        .map((n) => n.replace(/-/g, '')),
    )
    .flat()
    .sort()
    .forEach((num) => {
      resultMap.set(num, (resultMap.get(num) || 0) + 1)
    })
  return [...resultMap].map(([key, value]) => `${key}:${value}`).join('+')
}

const vampireTest = (a, b) => getResult([a, b]) === getResult([a * b])

// vampireTest(21, 6) === true
// vampireTest(204, 615) === true
// vampireTest(30, -51) === true
// vampireTest(-246, -510) === false
// vampireTest(2947050, 8469153) === true
// vampireTest(2947051, 8469153) === false
// vampireTest(0, 0)
// vampireTest(-246, -510)
