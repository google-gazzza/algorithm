// [JS][7kyu] Consecutive Vowels in a String
// consecutive-vowels-in-a-string
// https://www.codewars.com/kata/62a933d6d6deb7001093de16/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const getTheVowels = (word) => {
  let str = word
    .split('')
    .filter((char) => VOWEL_LIST.includes(char))
    .join('')

  let count = 0
  let targetIndex = 0
  while (true) {
    const index = str.indexOf(VOWEL_LIST[targetIndex % 5])
    if (index === -1) {
      break
    }
    str = str.slice(index + 1)
    targetIndex += 1
    count += 1
  }
  return count
}

getTheVowels('akfheujfkgiaaaofmmfkdfuaiiie')
getTheVowels('eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou')
getTheVowels('desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua')
getTheVowels('sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja')
getTheVowels('jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua')
