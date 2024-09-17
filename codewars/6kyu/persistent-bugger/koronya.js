// [JS][6kyu] Persistent Bugger.
// persistent-bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

const getNextTarget = (num) =>
  String(num)
    .split('')
    .reduce((acc, cur) => acc * cur, 1)

const persistence = (num) => {
  let count = 0
  let target = num
  while (target >= 10) {
    count += 1
    target = getNextTarget(target)
  }

  return count
}

persistence(39) === 3
persistence(4) === 0
persistence(25) === 2
persistence(999) === 4
