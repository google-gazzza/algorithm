// [JS][7kyu] Caffeine Script
// caffeine-script
// https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript

const caffeineBuzz = (n) => {
  let result = ''
  if (n % 3 === 0) {
    if (n % 4 === 0) {
      result += 'Coffee'
    } else {
      result += 'Java'
    }
    if (n % 2 === 0) {
      result += 'Script'
    }
  } else {
    result += 'mocha_missing!'
  }

  return result
}

caffeineBuzz(1) === 'mocha_missing!'
caffeineBuzz(3) === 'Java'
caffeineBuzz(6) === 'JavaScript'
caffeineBuzz(12) === 'CoffeeScript'
