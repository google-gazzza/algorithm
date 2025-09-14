// [JS][5kyu] Streams - endless arrays
// streams-endless-arrays
// https://www.codewars.com/kata/52744341faf5480173000bc7/train/javascript

class Stream {
  constructor(start, output, stepping) {
    this.start = start
    this.output = output
    this.stepping = stepping
  }

  head() {
    return this.output(this.start)
  }

  tail() {
    return new Stream(this.stepping(this.start), this.output, this.stepping)
  }
}

const increment = function (n) {
  return n + 1
}
const id = function (n) {
  return n
}
const naturalNumbers = new Stream(0, id, increment)
naturalNumbers.head()
naturalNumbers.tail().head()
naturalNumbers.tail().tail().head()

const even = function (n) {
  return n * 2
}
const evenNumbers = new Stream(0, even, increment)
evenNumbers.head()
evenNumbers.tail().head()
