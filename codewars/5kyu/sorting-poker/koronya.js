// [JS][5kyu] Sorting Poker
// sorting-poker
// https://www.codewars.com/kata/580ed88494291dd28c000019/train/javascript

const SHAPE_LIST = ['♠', '♥', '♣', '♦']
const getOrder = (char) => {
  switch (char) {
    case 'J':
      return 11
    case 'Q':
      return 12
    case 'K':
      return 13
    case 'A':
      return 14
    default:
      return Number(char)
  }
}

const sortPoker = (john, uncle) => {
  const uncleLen = uncle.length
  const orderSet = new Set()
  let uncleIndex = 0
  while (uncleIndex < uncleLen) {
    const char = uncle[uncleIndex]
    if (SHAPE_LIST.includes(char)) {
      orderSet.add(char)
    }
    uncleIndex += 1
  }
  const orderList = [...orderSet]
  const johnLen = john.length
  const johnList = []
  let prevShape = john[0]
  let prevNumber = john[1]
  let johnIndex = 2
  while (johnIndex < johnLen) {
    const char = john[johnIndex]
    if (SHAPE_LIST.includes(char)) {
      johnList.push({ shape: prevShape, num: prevNumber })
      prevShape = char
      prevNumber = ''
    } else {
      prevNumber += char
    }
    johnIndex += 1
  }
  johnList.push({ shape: prevShape, num: prevNumber })
  johnList.sort((a, b) => orderList.indexOf(a.shape) - orderList.indexOf(b.shape) || getOrder(a.num) - getOrder(b.num))

  return johnList.map((item) => item.shape + item.num).join('')
}

sortPoker('♦6♥2♠3♦5♠J♣Q♠K♣7♦2♣5♥5♥10♠A', '♠2♠3♠5♥J♥Q♥K♣8♣9♣10♦4♦5♦6♦7') === '♠3♠J♠K♠A♥2♥5♥10♣5♣7♣Q♦2♦5♦6'
sortPoker('♦6♥2♠3♦5♠J♣Q♠K♣7♦2♣5♥5♥10♠A', '♣8♣9♣10♦4♦5♦6♦7♠2♠3♠5♥J♥Q♥K') === '♣5♣7♣Q♦2♦5♦6♠3♠J♠K♠A♥2♥5♥10'
