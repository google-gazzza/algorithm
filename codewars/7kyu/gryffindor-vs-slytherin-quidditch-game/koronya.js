// [JS][7kyu] Gryffindor vs Slytherin Quidditch Game
// gryffindor-vs-slytherin-quidditch-game
// https://www.codewars.com/kata/5840946ea3d4c78e90000068/train/javascript

const getScore = (arr) => arr[0] + (arr[1] === 'yes' ? 150 : 0)
const gameWinners = (gryffindor, slytherin) => {
  const gryffindorScore = getScore(gryffindor)
  const slytherinScore = getScore(slytherin)
  return gryffindorScore > slytherinScore ? 'Gryffindor wins!' : gryffindorScore < slytherinScore ? 'Slytherin wins!' : "It's a draw!"
}

gameWinners([100, 'yes'], [100, 'no']) === 'Gryffindor wins!'
gameWinners([350, 'no'], [250, 'yes']) === 'Slytherin wins!'
gameWinners([100, 'yes'], [250, 'no']) === "It's a draw!"
