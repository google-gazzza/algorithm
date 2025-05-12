// [JS][7kyu] What comes after?
// what-comes-after
// https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/javascript

const comes_after = (str, l) => {
  const lowerStr = str.toLowerCase()
  const lowerL = l.toLowerCase()
  const indexArr = []
  let index = lowerStr.indexOf(lowerL)
  while (index !== -1) {
    indexArr.push(index)
    index = lowerStr.indexOf(lowerL, index + 1)
  }

  const isValid = (index) => {
    if (index + 1 >= str.length) {
      return false
    }
    return /^[A-Za-z]+$/.test(str[index + 1])
  }

  return indexArr.reduce((acc, curIndex) => {
    return isValid(curIndex) ? acc + str[curIndex + 1] : acc
  }, '')
}

comes_after('are you really learning Ruby?', 'r') === 'eenu'
comes_after('Pirates say arrrrrrrrr', 'r') === 'arrrrrrrr'
comes_after('Free coffee for all office workers!', 'f') === 'rfeofi'
comes_after('Every Sunday, she reads newspapers.', 's') === 'uhp'
comes_after('king kUnta is the sickest rap song ever kNown', 'k') === 'iUeN'
comes_after('p8tice makes pottery p_r p0rfect!', 'p') === 'o'
comes_after('d8u d._ rly 2d1s', 'D') === ''
comes_after('nothing to be found here', 'z') === ''
