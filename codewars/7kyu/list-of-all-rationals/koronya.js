// [JS][7kyu] List of all Rationals
// list-of-all-rationals
// https://www.codewars.com/kata/5e4e8f5a72d9550032953717/train/javascript

function* allRationals() {
  const resultArr = [[1, 1]]
  let head = 0

  while (true) {
    const [a, b] = resultArr[head]
    head += 1
    resultArr.push([a, a + b], [a + b, b])
    yield [a, b]

    if (head > 1_000_000) {
      resultArr.splice(0, head)
      head = 0
    }
  }
}
