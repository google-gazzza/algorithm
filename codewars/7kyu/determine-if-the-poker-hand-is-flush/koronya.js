// [JS][7kyu] Determine if the poker hand is flush
// determine-if-the-poker-hand-is-flush
// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/train/javascript

const isFlush = (cards) => {
  const shape = cards[0].slice(-1)
  return cards.every((card) => card.slice(-1) === shape)
}

isFlush(['AS', '3S', '9S', 'KS', '4S']) === true
isFlush(['AD', '4S', '7H', 'KC', '5S']) === false
isFlush(['AD', '4S', '10H', 'KC', '5S']) === false
isFlush(['QD', '4D', '10D', 'KD', '5D']) === true
isFlush(['10D', '4D', 'QD', 'KD', '5D']) === true
