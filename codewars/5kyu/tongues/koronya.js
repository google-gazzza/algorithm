// [JS][5kyu] Tongues
// tongues
// https://www.codewars.com/kata/52763db7cffbc6fe8c0007f8/train/javascript

const LOWER_VOWEL_LIST = ['a', 'i', 'y', 'e', 'o', 'u']
const UPPER_VOWEL_LIST = ['A', 'I', 'Y', 'E', 'O', 'U']
const LOWER_CONSONANT_LIST = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f']
const UPPER_CONSONANT_LIST = ['B', 'K', 'X', 'Z', 'N', 'H', 'D', 'C', 'W', 'G', 'P', 'V', 'J', 'Q', 'T', 'S', 'R', 'L', 'M', 'F']
const VOWEL_LIST_LENGTH = LOWER_VOWEL_LIST.length
const CONSONANT_LIST_LENGTH = LOWER_CONSONANT_LIST.length

const isAlphabet = (char) => /^[a-zA-Z]$/.test(char)
const isVowel = (char) => LOWER_VOWEL_LIST.includes(char.toLowerCase())

const getConvertedVowel = (vowel) => {
  if (vowel === vowel.toUpperCase()) {
    return UPPER_VOWEL_LIST[(UPPER_VOWEL_LIST.indexOf(vowel) + 3) % VOWEL_LIST_LENGTH]
  }
  return LOWER_VOWEL_LIST[(LOWER_VOWEL_LIST.indexOf(vowel) + 3) % VOWEL_LIST_LENGTH]
}

const getConvertedConsonant = (consonant) => {
  if (consonant === consonant.toUpperCase()) {
    return UPPER_CONSONANT_LIST[(UPPER_CONSONANT_LIST.indexOf(consonant) + 10) % CONSONANT_LIST_LENGTH]
  }
  return LOWER_CONSONANT_LIST[(LOWER_CONSONANT_LIST.indexOf(consonant) + 10) % CONSONANT_LIST_LENGTH]
}

const tongues = (code) => {
  return code
    .split('')
    .map((char) => {
      if (isAlphabet(char) === false) {
        return char
      }
      if (isVowel(char)) {
        return getConvertedVowel(char)
      }
      return getConvertedConsonant(char)
    })
    .join('')
}

tongues('Ita dotf ni dyca nsaw ecc.') === 'One ring to rule them all.'
tongues('Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu.') === 'Now is the time for all good men to come to the aid of their country.'
tongues('Giydhlida etr hakat uaedh efi iyd gidagensadh pdiyfsn ytni nsoh') === 'Fourscore and seven years ago our forefathers brought unto this'
tongues('litnotatn e tam tenoit.') === 'continent a new nation.'
tongues('Nsa zyolv pdimt gij xywbar ikad nsa cequ rifh.') === 'The quick brown fox jumped over the lazy dogs.'
tongues('Tywpadh (1234567890) etr bytlnyenoit, nsau hsiycr pins pa ytlsetfar!') === 'Numbers (1234567890) and punctuation, they should both be unchanged!'
tongues(' ') === ' '
tongues('Nsoh oh tin Vcotfit pyn on liycr pa e roggadatn gidaoft cetfyefa.') === 'This is not Klingon but it could be a different foreign language.'
tongues('0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789') ===
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
tongues('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
  'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
tongues('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm') ===
  'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
tongues('z') === 'q'
tongues('n') === 't'
tongues('****************************************************************************************************') ===
  '****************************************************************************************************'
tongues('q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1') ===
  'z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1'
