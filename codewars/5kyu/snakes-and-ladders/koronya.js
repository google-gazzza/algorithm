// [JS][5kyu] Snakes and Ladders
// snakes-and-ladders
// https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript

const ladderMap = new Map([
  [2, 38],
  [7, 14],
  [8, 31],
  [15, 26],
  [21, 42],
  [28, 84],
  [36, 44],
  [51, 67],
  [71, 91],
  [78, 98],
  [87, 94],
])

const snakeMap = new Map([
  [99, 80],
  [95, 75],
  [92, 88],
  [89, 68],
  [74, 53],
  [64, 60],
  [62, 19],
  [49, 11],
  [46, 25],
  [16, 6],
])

function SnakesLadders() {
  this.isPlayer1Turn = true
  this.player1Position = 0
  this.player2Position = 0
  this.isGameOver = false
}

const getNextPosition = (start, move) => {
  const tempPosition = start + move
  const nextPosition = tempPosition > 100 ? 100 - (tempPosition - 100) : tempPosition
  if (ladderMap.has(nextPosition)) {
    return ladderMap.get(nextPosition)
  }
  if (snakeMap.has(nextPosition)) {
    return snakeMap.get(nextPosition)
  }
  return nextPosition
}

SnakesLadders.prototype.play = function (die1, die2) {
  if (this.isGameOver === true) {
    return 'Game over!'
  }
  const sum = die1 + die2
  const nextPosition = this.isPlayer1Turn === true ? getNextPosition(this.player1Position, sum) : getNextPosition(this.player2Position, sum)
  if (this.isPlayer1Turn === true) {
    this.player1Position = getNextPosition(this.player1Position, sum)
  } else {
    this.player2Position = getNextPosition(this.player2Position, sum)
  }
  if (nextPosition === 100) {
    this.isGameOver = true
    return `Player ${this.isPlayer1Turn === true ? '1' : '2'} Wins!`
  }
  const returnMessage = `Player ${this.isPlayer1Turn === true ? '1' : '2'} is on square ${
    this.isPlayer1Turn === true ? this.player1Position : this.player2Position
  }`
  if (die1 !== die2) {
    this.isPlayer1Turn = !this.isPlayer1Turn
  }

  return returnMessage
}

const game = new SnakesLadders()
game.play(1, 1)
game.play(1, 5)
game.play(6, 2)
game.play(1, 1)
game.play(6, 6)
game.play(5, 5)
game.play(6, 6)
game.play(6, 6)
game.play(6, 4)
game.play(6, 3)
game.play(1, 1)
