// [JS][7kyu] 80's Kids #5: You Can't Do That on Television
// 80-s-kids-5-you-can-t-do-that-on-television
// https://www.codewars.com/kata/5667525f0f157f7a0a000004/train/javascript

const isWaterPhrase = (str) => {
  const lowerStr = str.toLowerCase()
  return lowerStr.includes('water') || lowerStr.includes('wet') || lowerStr.includes('wash')
}

const isSlimePhrase = (str) => {
  const lowerStr = str.toLowerCase()
  return lowerStr.includes('slime') || lowerStr.includes(`i don't know`)
}

const bucketOf = (str) => {
  const isWater = isWaterPhrase(str)
  const isSlime = isSlimePhrase(str)
  if (!isWater && !isSlime) {
    return 'air'
  }
  if (isWater && isSlime) {
    return 'sludge'
  }
  return isWater ? 'water' : 'slime'
}

bucketOf('What is that, WATER?!?') === 'water'
bucketOf("I don't know if I'm doing this right.") === 'slime'
bucketOf("You won't get me!") === 'air'
