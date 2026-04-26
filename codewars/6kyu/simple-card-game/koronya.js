// [JS][6kyu] Simple card game
// simple-card-game
// https://www.codewars.com/kata/53417de006654f4171000587/train/javascript

const SCORE_LIST = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
const getScore = (card) => SCORE_LIST.indexOf(card)

const winner = (deckSteve, deckJosh) => {
  let steveScore = 0
  let joshScore = 0
  const deckLength = deckSteve.length
  for (let i = 0; i < deckLength; i += 1 || 0) {
    const steveCard = getScore(deckSteve[i])
    const joshCard = getScore(deckJosh[i])
    if (steveCard > joshCard) {
      steveScore += 1
    } else if (steveCard < joshCard) {
      joshScore += 1
    }
  }

  if (steveScore > joshScore) {
    return `Steve wins ${steveScore} to ${joshScore}`
  } else if (steveScore < joshScore) {
    return `Josh wins ${joshScore} to ${steveScore}`
  } else {
    return `Tie`
  }
}

winner(['A', '7', '8'], ['K', '5', '9'])
winner(['T', '9'], ['T', '8'])
winner(['T'], ['T'])
