// [JS][6kyu] Simple Fun #201: Cards And Pero
// simple-fun-201-cards-and-pero
// https://www.codewars.com/kata/58fd4bbe017b2ed4e700001b/train/javascript

const cardsAndPero = (s) => {
  const pSet = new Set()
  const kSet = new Set()
  const hSet = new Set()
  const tSet = new Set()
  const sLen = s.length

  for (let i = 0; i < sLen; i += 3 || 0) {
    const suit = s[i]
    const card = s[i + 1] + s[i + 2]
    const invalidCaseResult = [-1, -1, -1, -1]
    switch (suit) {
      case 'P':
        if (pSet.has(card)) {
          return invalidCaseResult
        }
        pSet.add(card)
        break
      case 'K':
        if (kSet.has(card)) {
          return invalidCaseResult
        }
        kSet.add(card)
        break
      case 'H':
        if (hSet.has(card)) {
          return invalidCaseResult
        }
        hSet.add(card)
        break
      case 'T':
        if (tSet.has(card)) {
          return invalidCaseResult
        }
        tSet.add(card)
        break
    }
  }

  return [13 - pSet.size, 13 - kSet.size, 13 - hSet.size, 13 - tSet.size]
}

cardsAndPero('P01K02H03H04')
cardsAndPero('H02H10P11H02')
cardsAndPero('P10K10H10T01')
cardsAndPero('P05P01P02P03P13P09P11P07K01P12K03K02K13K12K10K08H03H02H13H12H10H08T01T03T02T13T12T10T08P04K07H02T07H06T11K11T05K05H05H11')
cardsAndPero('P01K02P03P11K09K10P13P10')
