// [JS][6kyu] Bingo Card
// bingo-card
// https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript

const CARD_INFO = [
  { name: 'B', range: [1, 15], count: 5 },
  { name: 'I', range: [16, 30], count: 5 },
  { name: 'N', range: [31, 45], count: 4 },
  { name: 'G', range: [46, 60], count: 5 },
  { name: 'O', range: [61, 75], count: 5 },
]

const getCard = () => {
  const numSet = new Set()
  const cardList = []
  CARD_INFO.forEach((info) => {
    const { name, range, count } = info
    const card = []
    while (card.length < count) {
      const [start, end] = range
      const num = Math.floor(Math.random() * (end - start + 1)) + start
      if (!numSet.has(num)) {
        card.push(`${name}${num}`)
        numSet.add(num)
      }
    }
    cardList.push(card)
  })

  return cardList.flat()
}

getCard()
