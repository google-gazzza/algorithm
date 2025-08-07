// [JS][7kyu] Turing Machine: Movement
// turing-machine-movement
// https://www.codewars.com/kata/6885f0a045008e707baa714b/train/javascript

const read = (tape, head, moves) => {
  const movesLength = moves.length
  let currentHead = head
  let result = ''
  for (let i = 0; i < movesLength; i += 1 || 0) {
    result += tape[currentHead]
    const move = moves[i]
    if (move === '>') {
      currentHead += 1
    } else if (move === '<') {
      currentHead -= 1
    }
  }
  return result
}

read('011010', 2, '>>><') === '1010'
read('011010', 2, '') === ''
read('011010', 0, '>>>>>') === '01101'
read('011010', 5, '<<<<<') === '01011'
