// [JS][5kyu] Card Game
// card-game
// https://www.codewars.com/kata/61fef3a2d8fa98021d38c4e5/train/javascript

const cardGame = (n) => {
  let aliceScore = 0n
  let isAliceTurn = true

  while (n > 0n) {
    let score = 0
    if (n % 2n === 1n || (n % 4n === 0n && n >= 12n)) {
      score = 1n
      n -= 1n
    } else {
      score = n / 2n
      n -= n / 2n
    }
    if (isAliceTurn) {
      aliceScore += score
    }
    isAliceTurn = !isAliceTurn
  }

  return aliceScore
}

cardGame(10n) === 8n
cardGame(4n) === 3n
cardGame(5n) === 2n
cardGame(12n) === 9n
cardGame(100000000000n) === 99999999950n
