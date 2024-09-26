// [JS][6kyu] Fruit Machine
// fruit-machine
// https://www.codewars.com/kata/590adadea658017d90000039/train/javascript

const scoreMap = new Map()
const arr = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']

arr.forEach((item, index) => {
  const adjustIndex = 10 - index
  scoreMap.set(item, { three: 10 * adjustIndex, two: adjustIndex, plus: index !== 0 ? adjustIndex * 2 : 0 })
})

const fruit = (reels, spins) => {
  const item1 = reels[0][spins[0]]
  const item2 = reels[1][spins[1]]
  const item3 = reels[2][spins[2]]
  if (item1 === item2 && item2 === item3) {
    return scoreMap.get(item1).three
  }
  if (item1 === item2) {
    return item3 === 'Wild' ? scoreMap.get(item1).plus : scoreMap.get(item1).two
  }
  if (item2 === item3) {
    return item1 === 'Wild' ? scoreMap.get(item2).plus : scoreMap.get(item2).two
  }
  if (item1 === item3) {
    return item2 === 'Wild' ? scoreMap.get(item1).plus : scoreMap.get(item1).two
  }
  return 0
}

const reel = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
const spin = [0, 0, 0]
fruit([reel, reel, reel], spin) === 100

const reel1 = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
const reel2 = ['Bar', 'Wild', 'Queen', 'Bell', 'King', 'Seven', 'Cherry', 'Jack', 'Star', 'Shell']
const reel3 = ['Bell', 'King', 'Wild', 'Bar', 'Seven', 'Jack', 'Shell', 'Cherry', 'Queen', 'Star']
const spin2 = [5, 4, 3]
fruit([reel1, reel2, reel3], spin2) === 0

const reel4 = ['King', 'Cherry', 'Bar', 'Jack', 'Seven', 'Queen', 'Star', 'Shell', 'Bell', 'Wild']
const reel5 = ['Bell', 'Seven', 'Jack', 'Queen', 'Bar', 'Star', 'Shell', 'Wild', 'Cherry', 'King']
const reel6 = ['Wild', 'King', 'Queen', 'Seven', 'Star', 'Bar', 'Shell', 'Cherry', 'Jack', 'Bell']
const spin3 = [0, 0, 1]
fruit([reel4, reel5, reel6], spin3) === 3
fruit([reel4, reel5, reel6], spin3)

const reel7 = ['King', 'Jack', 'Wild', 'Bell', 'Star', 'Seven', 'Queen', 'Cherry', 'Shell', 'Bar']
const reel8 = ['Star', 'Bar', 'Jack', 'Seven', 'Queen', 'Wild', 'King', 'Bell', 'Cherry', 'Shell']
const reel9 = ['King', 'Bell', 'Jack', 'Shell', 'Star', 'Cherry', 'Queen', 'Bar', 'Wild', 'Seven']
const spin4 = [0, 5, 0]
fruit([reel7, reel8, reel9], spin4) === 6
fruit([reel7, reel8, reel9], spin4)
