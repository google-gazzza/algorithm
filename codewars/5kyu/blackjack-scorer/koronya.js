// [JS][5kyu] Blackjack Scorer
// blackjack-scorer
// https://www.codewars.com/kata/534ffb35edb1241eda0015fe/train/javascript

const scoreHand = (cards) => {
  const withoutAceList = cards.filter((card) => card !== 'A')
  const aceList = cards.filter((card) => card === 'A')

  const withoutAceScore = withoutAceList.reduce((acc, card) => {
    if (['J', 'Q', 'K'].includes(card)) {
      return acc + 10
    }
    return acc + parseInt(card, 10)
  }, 0)

  const aceLength = aceList.length
  if (aceLength === 0) {
    return withoutAceScore
  }

  const untilMaxScore = 21 - withoutAceScore
  if (untilMaxScore >= aceLength * 11) {
    return withoutAceScore + aceLength * 11
  }

  if (untilMaxScore < 11) {
    return withoutAceScore + aceLength
  }

  const adjustScore = untilMaxScore > aceLength + 10 ? aceLength + 10 : aceLength
  return withoutAceScore + adjustScore
}



scoreHand(['2', '3']) === 5
scoreHand(['7', '7', '8']) === 22
scoreHand(['4', '7', '8']) === 19

// should score J, Q and K as 10
scoreHand(['K', 'J', 'Q']) === 30

// should core hands with Aces correctly
scoreHand(['A', '3']) === 14
scoreHand(['A', 'A']) === 12
scoreHand(['A', '2', 'A', '9', '9']) === 22

scoreHand(['7', '9', 'A']) === 17
scoreHand(['3', 'A', 'A', '7']) === 12
scoreHand(['K', 'A']) === 21
scoreHand(['A', 'A']) === 12