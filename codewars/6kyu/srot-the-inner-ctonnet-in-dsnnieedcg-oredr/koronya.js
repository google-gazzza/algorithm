// [JS][6kyu] Srot the inner ctonnet in dsnnieedcg oredr
// srot-the-inner-ctonnet-in-dsnnieedcg-oredr
// https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript

const sortTheInnerContent = (words) => {
  return words
    .split(' ')
    .map((word) => {
      word
      const wordLen = word.length
      if (wordLen > 2) {
        const first = word[0]
        const last = word[wordLen - 1]
        const inner = word
          .slice(1, wordLen - 1)
          .split('')
          .sort()
          .reverse()
          .join('')
        return `${first}${inner}${last}`
      }
      return word
    })
    .join(' ')
}

sortTheInnerContent('sort the inner content in descending order') === 'srot the inner ctonnet in dsnnieedcg oredr'
sortTheInnerContent('wait for me') === 'wiat for me'
sortTheInnerContent('this kata is easy') === 'tihs ktaa is esay'
