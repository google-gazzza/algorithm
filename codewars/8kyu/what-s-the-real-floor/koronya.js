// [JS][8kyu] What's the real floor?
// what-s-the-real-floor
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

const getRealFloor = (n) => {
  if (n <= 0) {
    return n
  }
  if (n >= 13) {
    return n - 2
  }
  return n - 1
}

getRealFloor(1) === 0
getRealFloor(5) === 4
getRealFloor(15) === 13
getRealFloor(-2) === -2
