// [JS][7kyu] Simple Fun #17: Rounders
// simple-fun-17-rounders
// https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript

const rounders = (value) => {
  const arr = String(value).split('')
  const arrLen = arr.length
  let isUp = false
  let num = 0
  while (arr.length > 0) {
    num = isUp ? Number(arr.pop()) + 1 : Number(arr.pop())
    if (num > 4) {
      isUp = true
    } else {
      isUp = false
    }
  }
  return num * 10 ** (arrLen - 1)
}

rounders(15) === 20
rounders(1234) === 1000
rounders(1445) === 2000
rounders(14) === 10
rounders(99) === 100
rounders(10) === 10
