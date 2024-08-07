// [JS][7kyu] Responsible Drinking
// responsible-drinking
// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

const hydrate = (s) => {
  const count = s.match(/\d+/g).reduce((acc, cur) => acc + Number(cur), 0)
  return `${count} glass${count > 1 ? 'es' : ''} of water`
}

hydrate('1 beer') === '1 glass of water'
hydrate('2 glasses of wine and 1 shot') === '3 glasses of water'
hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer') === '10 glasses of water'
