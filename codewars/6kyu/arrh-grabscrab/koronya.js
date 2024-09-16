// [JS][6kyu] Arrh, grabscrab!
// arrh-grabscrab
// https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript

const isSameMap = (mapA, mapB) => {
  if (mapA.size !== mapB.size) {
    return false
  }
  for (const [key, value] of mapA) {
    if (mapB.get(key) !== value) {
      return false
    }
  }
  return true
}

const grabscrab = (anagram, dictionary) => {
  const anagramMap = new Map()
  anagram.split('').forEach((char) => {
    anagramMap.set(char, (anagramMap.get(char) || 0) + 1)
  })

  return dictionary.filter((word) => {
    const wordMap = new Map()
    word.split('').forEach((char) => {
      wordMap.set(char, (wordMap.get(char) || 0) + 1)
    })
    return isSameMap(wordMap, anagramMap)
  })
}

grabscrab('trisf', ['first'])
grabscrab('oob', ['bob', 'baobab'])
grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])
grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])
grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])
grabscrab('ourf', ['one', 'two', 'three'])
