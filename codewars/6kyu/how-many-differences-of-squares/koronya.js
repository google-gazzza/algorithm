// [JS][6kyu] How Many Differences of Squares?
// how-many-differences-of-squares
// https://www.codewars.com/kata/5afa08f23e971553170001e0/train/javascript

const countSquareable = (n) => {
  const resultSet = new Set()
  let second = 0
  while (2 * second + 1 <= n) {
    let first = second + 1
    const secondSquare = second ** 2
    while (true) {
      const value = first ** 2 - secondSquare
      if (value > n) {
        break
      }
      resultSet.add(value)
      first += 1
    }
    second += 1
  }
  return resultSet.size
}

countSquareable(4) === 3
countSquareable(5) === 4
countSquareable(40) === 30
countSquareable(20) === 15
countSquareable(10) === 7

countSquareable(50) === 37
countSquareable(500) === 375
countSquareable(537) === 403
countSquareable(45000) === 33750
countSquareable(6427) === 4820
