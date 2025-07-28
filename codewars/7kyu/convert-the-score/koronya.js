// [JS][7kyu] Convert the score
// convert-the-score
// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript

const getNumber = (str) => {
  switch (str) {
    case 'one':
      return 1
    case 'two':
      return 2
    case 'three':
      return 3
    case 'four':
      return 4
    case 'five':
      return 5
    case 'six':
      return 6
    case 'seven':
      return 7
    case 'eight':
      return 8
    case 'nine':
      return 9
    case 'nil':
      return 0
    default:
      return null
  }
}

const scoreboard = (string) => {
  const words = string.split(' ')
  const lastNumber = getNumber(words.pop())
  const lastPrevNumber = getNumber(words.pop())

  return [lastPrevNumber, lastNumber]
}

scoreboard('The score is four nil')
scoreboard('new score: two three')
scoreboard('two two')
scoreboard('Arsenal just conceded another goal, two nil')
