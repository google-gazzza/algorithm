// [JS][7kyu] 80's Kids #3: Punky Brewster's Socks
// 80-s-kids-3-punky-brewster-s-socks
// https://www.codewars.com/kata/5662292ee7e2da24e900012f/train/javascript

const getSocks = (name, socks) => {
  const socksMap = new Map()
  socks.forEach((sock) => {
    socksMap.set(sock, (socksMap.get(sock) || 0) + 1)
  })

  const sortedSocks = [...socksMap].sort((a, b) => b[1] - a[1])
  if (name === 'Henry') {
    if (sortedSocks[0][1] > 1) {
      return [sortedSocks[0][0], sortedSocks[0][0]]
    }
    return []
  }

  if (sortedSocks.length > 1) {
    return [sortedSocks[0][0], sortedSocks[1][0]]
  }
  return []
}

getSocks('Punky', ['red', 'blue', 'blue', 'green'])
