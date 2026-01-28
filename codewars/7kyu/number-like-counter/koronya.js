// [JS][7kyu] Number-like counter
// number-like-counter
// https://www.codewars.com/kata/5313b713bb244a0eb20001fe/train/javascript

class Counter {
  constructor() {
    this.value = 0
  }

  incr() {
    this.value += 1
    return this
  }

  [Symbol.toPrimitive](hint) {
    return this.value
  }
}

const c = new Counter()
c.incr()
c + 1 // 2
c > 1 // false
c > 0 // true
c == 1 // true
Math.sqrt(c) // 1
