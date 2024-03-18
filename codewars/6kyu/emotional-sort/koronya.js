// [JS][6kyu] Emotional Sort ( ︶︿︶)
// emotional-sort
// https://www.codewars.com/kata/5a86073fb17101e453000258/train/javascript

const PRIORITY_INFO = {
  ':D': 1,
  ':)': 2,
  ':|': 3,
  ':(': 4,
  T_T: 5,
}

const sortEmotions = (arr, order) => {
  return arr
    .map((item) => ({ item, priority: PRIORITY_INFO[item] }))
    .sort((a, b) => {
      if (order) {
        return a.priority - b.priority
      }
      return b.priority - a.priority
    })
    .map((item) => item.item)
}

const arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
