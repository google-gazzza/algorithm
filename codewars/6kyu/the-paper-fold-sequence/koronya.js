// [JS][6kyu] The PaperFold sequence
// the-paper-fold-sequence
// https://www.codewars.com/kata/5d26721d48430e0016914faa/train/javascript

const getFlippedReversed = (arr) => [...arr].reverse().map((x) => 1 - x)

function* paperFold() {
  let seq = [1]
  let index = 0

  while (true) {
    if (index < seq.length) {
      yield seq[index++]
    } else {
      seq = [...seq, 1, ...getFlippedReversed(seq)]
      yield seq[index++]
    }
  }
}

const take = (n) =>
  function* (gen) {
    while (n-- > 0) yield gen.next().value
  }
// Array.from(take(1)(paperFold()))
// Array.from(take(2)(paperFold()))
// Array.from(take(3)(paperFold()))
// Array.from(take(10)(paperFold()))
// Array.from(take(20)(paperFold()))
// Array.from(take(10000)(paperFold()))
