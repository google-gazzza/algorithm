// [JS][5kyu] The Road-Kill Detective
// the-road-kill-detective
// https://www.codewars.com/kata/58e18c5434a3022d270000f2/train/javascript

const ANIMALS = [
  'antelope',
  'bear',
  'cat',
  'dog',
  'elephant',
  'fox',
  'giraffe',
  'hyena',
  'impala',
  'jaguar',
  'koala',
  'lion',
  'monkey',
  'newt',
  'owl',
  'penguin',
  'quail',
  'rabbit',
  'sheep',
  'tiger',
  'uakari',
  'vulture',
  'wolf',
  'xerus',
  'yak',
  'zebra',
  'aardvark',
  'baboon',
  'alligator',
]

const getWordInfoArray = (word) => {
  let resultArr = []
  let prev = word[0]
  let count = 1
  const wordLen = word.length
  for (let i = 1; i < wordLen; i += 1) {
    const str = word[i]
    if (str !== prev) {
      resultArr.push({ count, char: prev })
      count = 1
      prev = str
    } else {
      count += 1
    }
  }
  resultArr.push({ count, char: prev })
  return resultArr
}

const isValid = (testArr, sampleArr) => {
  if (testArr.length !== sampleArr.length) {
    return false
  }
  for (let i = 0; i < testArr.length; i += 1) {
    if (testArr[i].char !== sampleArr[i].char || testArr[i].count < sampleArr[i].count) {
      return false
    }
  }
  return true
}

const ANIMALS_INFO_ARR = ANIMALS.map((animal) => getWordInfoArray(animal))

const roadKill = (photo) => {
  const cleaned = photo.replace(/=+/g, '')
  if (cleaned.length === 0) {
    return '??'
  }

  const testArr = getWordInfoArray(cleaned)
  const findIndex = ANIMALS_INFO_ARR.findIndex((sampleArr) => isValid(testArr, sampleArr))
  if (findIndex > -1) {
    return ANIMALS[findIndex]
  }

  const testArrReverse = testArr.reverse()
  const findIndexReverse = ANIMALS_INFO_ARR.findIndex((sampleArr) => isValid(testArrReverse, sampleArr))
  if (findIndexReverse > -1) {
    return ANIMALS[findIndexReverse]
  }

  return '??'
}

// roadKill('==========h===yyyyyy===eeee=n==a========') === 'hyena'
// roadKill('======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=') === 'penguin'
// roadKill('=====r=rrr=rra=====eee======bb====b=======') === 'bear'

// roadKill('===b=b==========a=a=a=a=a=a=a=boo======n=====') === 'baboon'
// roadKill('=====kr=r===r=r=a===avvd==d==d=r==rrr=r=a=a=a=====') === 'aardvark'

// roadKill('=======') === '??'
// roadKill('==a======a=a=a=lig===a=t====o=r=r=r=r==')
