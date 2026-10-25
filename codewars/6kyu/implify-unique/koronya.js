// [JS][6kyu] implify Unique
// implify-unique
// https://www.codewars.com/kata/5820dc06b81f700f98000288/train/javascript

const allowed = '0132456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -'

let simMap = new Map()

const convertStr = (str) => [...str].map((char) => (allowed.includes(char) ? char : '-')).join('')

const simunq = (original) => {
  const str = convertStr(original)
  if (!simMap.has(str)) {
    simMap.set(str, 1)
    return str
  }

  const newCount = simMap.get(str) + 1
  simMap.set(str, newCount)
  const newStr = `${str}-${newCount}`
  simMap.set(newStr, 1)
  return newStr
}

simunq.reset = function () {
  simMap = new Map()
}

simunq('blah') === 'blah'
simunq('blah') === 'blah-2'
simunq('blah-2') === 'blah-2-2'
simunq('blah-1') === 'blah-1'
simunq('blah?') === 'blah-'
simunq('blah!') === 'blah--2'
simunq('blah…') === 'blah--3'
simunq('bléch') === 'bl-ch'
simunq('le bléch') === 'le bl-ch'

simunq.reset()
simunq('blah') === 'blah'
