// [JS][7kyu] L2: Triple X
// l2-triple-x
// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript

const tripleX = (str) => {
  const index = str.indexOf('x')
  return str[index + 1] === 'x' && str[index + 2] === 'x'
}

tripleX('abraxxxas') === true
tripleX('xoxotrololololololoxxx') === false
tripleX('soft kitty, warm kitty, xxxxx') === true
tripleX('softx kitty, warm kitty, xxxxx') === false
