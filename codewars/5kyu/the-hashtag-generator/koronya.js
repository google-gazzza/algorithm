// [JS][5kyu] The Hashtag Generator
// the-hashtag-generator
// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

const toCapitalizeStr = (str) => `${str[0].toUpperCase()}${str.slice(1)}`

const generateHashtag = (str) => {
  const trimString = str.trim()
  if (trimString.length === 0) {
    return false
  }
  const startString = str[0] === '#' ? '' : '#'
  const resultString = trimString
    .split(' ')
    .filter((str) => str)
    .reduce((acc, cur) => acc + toCapitalizeStr(cur), startString)

  return resultString.length > 140 ? false : resultString
}

// generateHashtag(' Hello there thanks for trying my Kata')
// generateHashtag('    Hello     World   ')
// generateHashtag('')
// generateHashtag('    Hello World   ')
// generateHashtag('  123   ')
// generateHashtag('#DoWehaveAHashtag')
// generateHashtag('#DoWehaveAHashtag')
// generateHashtag('a'.repeat(139))
// generateHashtag('a'.repeat(140))
generateHashtag('a'.repeat(5))

// =>  "#HelloThereThanksForTryingMyKata"
//                 =>  "#HelloWorld"
//                                       =>  false
