// [JS][8kyu] Rock Paper Scissors!
// rock-paper-scissors
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  }
  if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
}

rps('rock', 'scissors')
rps('scissors', 'paper')
rps('paper', 'rock')

rps('scissors', 'rock')
rps('paper', 'scissors')
rps('rock', 'paper')

rps('rock', 'rock')
rps('scissors', 'scissors')
rps('paper', 'paper')
