// [JS][5kyu] Josephus Survivor
// josephus-survivor
// https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript

const josephusSurvivor = (n, k) => {
  const arr = Array.from({ length: n }, (_, index) => index + 1)
  let index = 0
  let count = 0
  while (arr.length > 1) {
    count += 1
    if (count % k === 0) {
      arr.splice(index, 1)
    } else {
      index += 1
    }

    if (index === arr.length) {
      index = 0
    }
  }

  return arr[0]
}

josephusSurvivor(7, 3) === 4
josephusSurvivor(11, 19) === 10
josephusSurvivor(1, 300) === 1
josephusSurvivor(14, 2) === 13
josephusSurvivor(100, 1) === 100
