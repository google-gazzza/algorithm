// [JS][6kyu] 80's Kids #7: She's a Small Wonder
// 80-s-kids-7-she-s-a-small-wonder
// https://www.codewars.com/kata/56743fd3a12043ffbb000049/train/javascript

const isValidKeyword = (str) => /^[a-zA-Z]+$/.test(str)

class Robot {
  constructor() {
    this.keywordSet = new Set(['thank', 'you', 'for', 'teaching', 'me', 'i', 'already', 'know', 'understand'])
  }
  learnWord(keyword) {
    if (isValidKeyword(keyword) === false) {
      return 'I do not understand the input'
    }
    const lowerKeyword = keyword.toLowerCase()
    if (this.keywordSet.has(lowerKeyword) === true) {
      return `I already know the word ${keyword}`
    }
    this.keywordSet.add(lowerKeyword)
    return `Thank you for teaching me ${keyword}`
  }
}

const vicky = new Robot()

vicky.learnWord('hello') === 'Thank you for teaching me hello'
vicky.learnWord('world') === 'Thank you for teaching me world'
vicky.learnWord('goodbye') === 'Thank you for teaching me goodbye'
vicky.learnWord('world') === 'I already know the word world'
vicky.learnWord('World') === 'I already know the word World'
