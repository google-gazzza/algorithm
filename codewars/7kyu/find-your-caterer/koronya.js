// [JS][7kyu] Find your caterer
// find-your-caterer
// https://www.codewars.com/kata/6402205dca1e64004b22b8de/train/javascript

const findCaterer = (budget, people) => {
  const priceArr = [15, 20, 30]
  if (people > 60) {
    priceArr[2] = 24
  }
  if (people === 0) {
    return -1
  }
  if (budget >= people * priceArr[2]) {
    return 3
  }
  if (budget >= people * priceArr[1]) {
    return 2
  }
  if (budget >= people * priceArr[0]) {
    return 1
  }
  return -1
}

findCaterer(150, 10) === 1
findCaterer(1500, 60) === 2
findCaterer(1500, 61) === 3
findCaterer(100, 0) === -1
findCaterer(200, 5) === 3
