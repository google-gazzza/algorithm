// [JS][6kyu] Guess the number!
// guess-the-number
// https://www.codewars.com/kata/5452113c699b538c18000b01/train/javascript

Guesser.prototype.getNumber = function getNumber() {
  let low = 1
  let high = 1000
  let half = Math.floor((low + high) / 2)
  while (true) {
    let result = this.guess(half)
    if (result === 'Correct!') {
      return half
    }
    if (result === 'Too high!') {
      high = half - 1
    } else {
      low = half + 1
    }
    half = Math.floor((low + high) / 2)
  }
}
