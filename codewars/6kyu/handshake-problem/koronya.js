// [JS][6kyu] Handshake problem
// handshake-problem
// https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

const getCombination2 = (n) => (n * (n - 1)) / 2

const getParticipants = (handshakes) => {
  if (handshakes === 0) {
    return 0
  }
  let n = 1
  while (true) {
    if (handshakes <= getCombination2(n)) {
      return n
    }
    n += 1
  }
}

getParticipants(0) === 0
getParticipants(1) === 2
getParticipants(3) === 3
getParticipants(6) === 4
getParticipants(7) === 5
