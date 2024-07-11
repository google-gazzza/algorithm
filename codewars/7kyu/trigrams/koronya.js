// [JS][7kyu] Trigrams
// trigrams
// https://www.codewars.com/kata/55d8dc4c8e629e55dc000068/train/javascript

const trigrams = (phrase) => {
  const adjustPhrase = phrase.replaceAll(' ', '_')
  const adjustPhraseLen = adjustPhrase.length
  return Array.from({ length: adjustPhraseLen - 2 }, (_, i) => adjustPhrase.slice(i, i + 3)).join(' ')
}

trigrams('the quick red') === 'the he_ e_q _qu qui uic ick ck_ k_r _re red'
