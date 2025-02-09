// [JS][7kyu] Hex Word Sum
// hex-word-sum
// https://www.codewars.com/kata/5c46ea433dd41b19af1ca3b3/train/javascript

const hexStrToDec = (str) => (/[^05A-F]/.test(str) ? 0 : parseInt(str, 16))
const convertWord = (word) => word.replace(/O/g, '0').replace(/S/g, '5')
const hexWordSum = (string) => {
  if (string === '') {
    return 0
  }
  const convertedWordList = string.split(' ').map((word) => convertWord(word))
  return convertedWordList.reduce((acc, cur) => acc + hexStrToDec(cur), 0)
}

hexWordSum('DEFACE') === 14613198
hexWordSum('SAFE') === 23294
hexWordSum('CODE') === 49374
hexWordSum('BUGS') === 0
hexWordSum('') === 0
hexWordSum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE') === 13565769
hexWordSum('ASSESS ANY BAD CODE AND TRY AGAIN') === 10889952
