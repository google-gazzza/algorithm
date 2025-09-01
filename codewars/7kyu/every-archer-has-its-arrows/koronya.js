// [JS][7kyu] Every archer has its arrows
// every-archer-has-its-arrows
// https://www.codewars.com/kata/559f89598c0d6c9b31000125/train/javascript

const archersReady = (archers) => {
  if (archers.length < 1) {
    return false
  }
  return archers.every((archer) => archer > 4)
}

archersReady([]) === false
archersReady([1, 2, 3, 4]) === false
archersReady([5, 6, 7, 8]) === true
archersReady([1, 2, 3, 4, 5, 6, 7, 8]) === false
