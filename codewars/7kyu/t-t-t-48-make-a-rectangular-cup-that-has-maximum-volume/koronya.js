// [JS][7kyu] T.T.T.48: Make a rectangular cup that has maximum volume
// t-t-t-48-make-a-rectangular-cup-that-has-maximum-volume
// https://www.codewars.com/kata/57be770e80ee7a06640000cf/train/javascript

const maximumVolume = (n) => {
  const arr = []
  let target = n - 2
  let count = 1
  while (target > 0) {
    arr.push(target ** 2 * count)
    target -= 2
    count += 1
  }

  return Math.max(...arr)
}

maximumVolume(5) === 9
maximumVolume(6) === 16
maximumVolume(7) === 25
maximumVolume(8) === 36
maximumVolume(9) === 50
maximumVolume(10) === 72
maximumVolume(20) === 588
