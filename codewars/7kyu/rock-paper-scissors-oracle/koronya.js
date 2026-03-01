// [JS][7kyu] Rock Paper Scissors Oracle
// rock-paper-scissors-oracle
// https://www.codewars.com/kata/580535462e7b330bd300003d/train/javascript

const isWin = (gesture1, gesture2) => {
  if (gesture1 === 'rock' && gesture2 === 'scissors') {
    return true
  }
  if (gesture1 === 'paper' && gesture2 === 'rock') {
    return true
  }
  if (gesture1 === 'scissors' && gesture2 === 'paper') {
    return true
  }
  return false
}

const getScore = (gesture1, gesture2) => {
  if (gesture1 === gesture2) {
    return 0
  }
  if (isWin(gesture1, gesture2)) {
    return 1
  }
  return -1
}

const oracle = (gestures) => {
  const rockScore = gestures.reduce((score, gesture) => score + getScore('rock', gesture), 0)
  const paperScore = gestures.reduce((score, gesture) => score + getScore('paper', gesture), 0)
  const scissorsScore = gestures.reduce((score, gesture) => score + getScore('scissors', gesture), 0)
  if (rockScore === paperScore && paperScore === scissorsScore) {
    return 'tie'
  }
  const resultArr = []
  if (rockScore > 0) {
    resultArr.push('rock')
  }
  if (paperScore > 0) {
    resultArr.push('paper')
  }
  if (scissorsScore > 0) {
    resultArr.push('scissors')
  }

  return resultArr.join('/')
}

// oracle(['rock', 'paper', 'scissors', 'rock']) === 'paper'
// oracle(['rock', 'paper', 'scissors']) === 'tie'
// oracle(['rock', 'paper', 'paper', 'scissors', 'scissors']) === 'scissors'
// oracle(['paper', 'scissors', 'scissors']) === 'rock/scissors'
// oracle(['paper', 'paper', 'paper', 'rock', 'rock', 'paper', 'paper', 'rock'])
