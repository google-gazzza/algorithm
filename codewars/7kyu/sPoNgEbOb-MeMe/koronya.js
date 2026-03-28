// [JS][7kyu] sPoNgEbOb MeMe
// sPoNgEbOb-MeMe
// https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

const modifyWord = (word, isStartUpperCase) => {
  const modifiedWord = word
    .split('')
    .map((char, index) => {
      const modifyChar = isStartUpperCase ? char.toUpperCase() : char.toLowerCase()
      isStartUpperCase = !isStartUpperCase
      return modifyChar
    })
    .join('')
  return { modifiedWord, isStartUpperCase: !isStartUpperCase }
}

const spongeMeme = (sentence) => {
  let isStartUpperCase = true
  return sentence
    .split(' ')
    .map((word, index) => {
      const { modifiedWord, isStartUpperCase: newIsStartUpperCase } = modifyWord(word, isStartUpperCase)
      isStartUpperCase = newIsStartUpperCase
      return modifiedWord
    })
    .join(' ')
}

// spongeMeme('stop Making spongebob Memes!')
// spongeMeme('jpqivh Wvzoi laxqsb! Vkxhul dnv, pusm hstpxs Bt')
